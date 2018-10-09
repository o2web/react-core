import { asyncMutation, graphQLClient } from 'o2web-react-core';
import queries from './queries';
import types from './types';
import store from '../../../config/redux/store';

export default {
  signIn: (variables) => asyncMutation(
    store,
    types.SIGN_IN,
    queries.signIn,
    variables,
    graphQLClient,
  ),
  signUp: (variables) => asyncMutation(
    store,
    types.SIGN_UP,
    queries.signUp,
    variables,
    graphQLClient,
  ),
  signOut: () => {
    localStorage.removeItem('token');
    return {
      type: types.SIGN_OUT,
    };
  },
  validateToken: (variables) => asyncMutation(
    store,
    types.VALIDATE_TOKEN,
    queries.validateToken,
    variables,
    graphQLClient,
    (data) => {
      if (!data.validateToken.valid) {
        localStorage.removeItem('token');
      }
    },
  ),
  validateNoToken: () => ({
    type: types.VALIDATE_NO_TOKEN,
  }),
};
