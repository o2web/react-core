import 'ignore-styles';
import React from 'react';
import express from 'express';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import enforce from 'express-sslify';
import cache from './cache';
import ServerApp from '../src/app/components/ServerApp';
import store from '../src/config/redux/store';
import actions from '../src/app/actions/user';
import SSR_RESET_TYPE from '../src/config/redux/reset';

global.window = false;
global.document = false;

// soundcloud player hotfix
global.document = { createElement: () => {} };

const PORT = process.env.PORT || 80;
const app = express();

app.use('/static', express.static('build/static'));
app.use('/build', express.static('build'));

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.get('*', cache(1), (request, response) => {
  // reset redux store at every requests
  store.dispatch({ type: SSR_RESET_TYPE });
  store.dispatch(actions.validateNoToken());

  renderToString(
    <Provider store={store}>
      <ServerApp request={request} response={response} initialRender />
    </Provider>,
  );

  // return if redirect
  if (response.headersSent) {
    return response.end();
  }

  Promise.all(store.getState().promises.all)
    .then(() => {
      const content = renderToString(
        <Provider store={store}>
          <ServerApp request={request} response={response} />
        </Provider>,
      );

      const helmet = Helmet.renderStatic();
      const state = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
      const bodyToReplace = `<div id="root"></div>`;
      const body = `<div id="root">${content}</div><script>window.PRELOADED_STATE = ${state}</script>`;
      const headToReplace = '</head>';
      const headEnd = `${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}</head>`;

      const raw = fs
        .readFileSync('./build/index.html', 'utf8')
        .replace(bodyToReplace, body)
        .replace(headToReplace, headEnd);

      response.send(raw);
      response.end();
    });
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
