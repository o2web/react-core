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
    client,
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
