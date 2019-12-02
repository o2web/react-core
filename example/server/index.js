import 'ignore-styles';
import React from 'react';
import express from 'express';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import enforce from 'express-sslify';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import cache from './cache';
import ServerApp from '../src/app/components/ServerApp';
// import store from '../src/config/redux/store';
import SSR_RESET_TYPE from '../src/config/redux/reset';
import reducers from '../src/app/reducers';

global.window = false;
global.document = false;

const PORT = process.env.PORT || 80;
const app = express();

app.use('/static', express.static('build/static'));
app.use('/build', express.static('build'));
app.use('/robots.txt', express.static('build/robots.txt'));
app.use('/sitemap.xml', express.static('build/sitemap.xml'));

if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

app.get('*', cache(1), (request, response) => {
  // Create custom store
  const middlewares = [reduxThunk];
  const preloadedState = (typeof window !== 'undefined' && window.PRELOADED_STATE) ? window.PRELOADED_STATE : {};

  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
  const customStore = createStoreWithMiddleware(reducers, preloadedState);
  customStore.dispatch({ type: SSR_RESET_TYPE });

  renderToString(
    <Provider store={customStore}>
      <ServerApp request={request} response={response} customStore={customStore} initialRender />
    </Provider>,
  );
  // return if redirect
  if (response.headersSent) {
    return response.end();
  }
  Promise.all(customStore.getState().promises.all)
    .then(() => {
      renderToString(
        <Provider store={customStore}>
          <ServerApp
            request={request}
            response={response}
            customStore={customStore}
            initialRender
          />
        </Provider>,
      );
      Promise.all(customStore.getState().promises.all)
        .then(() => {
          const content = renderToString(
            <Provider store={customStore}>
              <ServerApp request={request} response={response} />
            </Provider>,
          );
          const helmet = Helmet.renderStatic();
          const state = JSON.stringify(customStore.getState()).replace(/</g, '\\u003c');
          const bodyToReplace = '<div id="root"></div>';
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
});

app.listen(PORT, () => console.log(`Frontend service listening on port: ${PORT}`));
