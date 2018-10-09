import { asyncMutation } from 'o2web-react-core';
import queries from './queries';
import types from './types';
import store from '../../../config/redux/store';
import client from '../../../config/graphql/custom-client';

export default {
  signIn: (variables) => asyncMutation(
    store,
    types.SIGN_IN,
    queries.signIn,
    variables,
    client,
  ),
  signUp: (variables) => asyncMutation(
    store,
    types.SIGN_UP,
    queries.signUp,
    variables,
    client,
  ),
  validateToken: (variables) => asyncMutation(
    store,
    types.VALIDATE_TOKEN,
    queries.validateToken,
    variables,
    client,
    (data) => {
      if (!data.validateToken.valid) {
        localStorage.removeItem('token');
      }
    },
  ),
  logout: () => ({
    type: types.USER_LOGOUT,
  }),
};
