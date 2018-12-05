import 'ignore-styles';
import React from 'react';
import express from 'express';
import Window from 'window';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import ServerApp from '../src/app/components/ServerApp';
import store from '../src/config/redux/store';

global.window = new Window();
global.window.scrollTo = () => {};
global.window.localStorage = { getItem: () => {}, setItem: () => {}, removeItem: () => {} };
global.document = window.document;
global.localStorage = window.localStorage;

const PORT = 8079;
const app = express();

app.use('/build', express.static('build'));

app.get('*', (request, response) => {
  const content = renderToString(
    <Provider store={store}>
      <ServerApp request={request} />
    </Provider>,
  );

  const raw = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="manifest" href="build/manifest.json">
        <title>o2web-react-core</title>
        <link href="build/static/css/main.05aaf55c.css" rel="stylesheet">
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${content}</div>
        <script type="text/javascript" src="build/static/js/main.680a7768.js"></script>
      </body>
    </html>
  `;

  response.send(raw);
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
