// libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// polyfills
import './config/polyfills/polyfills';
import registerServiceWorker from './registerServiceWorker';

// components
import App from './app/components/App';
import actions from './app/actions/user';
import reducers from './app/reducers/index';

const middlewares = [reduxThunk];

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.PRELOADED_STATE;

// Allow the passed state to be garbage-collected
delete window.PRELOADED_STATE;

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const store = createStoreWithMiddleware(reducers, preloadedState);

const token = localStorage.getItem('Authorization');

if (token) {
  store.dispatch(actions.validateToken()).then((data) => {
    if (!data || !data.validateToken.valid) {
      localStorage.removeItem('Authorization');
      localStorage.removeItem('Exipres');
      localStorage.removeItem('RefreshToken');
    }
  });
} else {
  store.dispatch(actions.validateNoToken());
}

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
