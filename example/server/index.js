import 'ignore-styles';
import React from 'react';
import express from 'express';
import Window from 'window';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import ServerApp from '../src/app/components/ServerApp';
import store from '../src/config/redux/store';
import actions from '../src/app/actions/user';

global.window = new Window();
global.window.scrollTo = () => {};
global.window.localStorage = { getItem: () => {}, setItem: () => {}, removeItem: () => {} };
global.document = window.document;
global.localStorage = window.localStorage;

const PORT = 8079;
const app = express();

app.use('/build', express.static('build'));

app.get('*', (request, response) => {
  store.dispatch(actions.validateNoToken());

  const content = renderToString(
    <Provider store={store}>
      <ServerApp request={request} response={response} />
    </Provider>,
  );

  const helmet = Helmet.renderStatic();

  const raw = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="manifest" href="build/manifest.json">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link href="/build/static/css/main.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.PRELOADED_STATE = ${JSON.stringify(store).replace(/</g, '\\\u003c')}
        </script>
      </body>
    </html>
  `;

  response.send(raw);
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
