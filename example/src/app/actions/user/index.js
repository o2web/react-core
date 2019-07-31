import queries from './queries';
import types from './types';
import store from '../../../config/redux/store';
import client from '../../../config/graphql/client';
import { asyncMutation } from '../../../config/graphql/async-action-creator';

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
    if (window) localStorage.removeItem('token');
    return {
      type: types.SIGN_OUT,
    };
  },
  updateAccount: (variables) => asyncMutation(
    store,
    types.UPDATE_ACCOUNT,
    queries.updateAccount,
    variables,
    client,
  ),
  resetPassword: (variables) => asyncMutation(
    store,
    types.RESET_PASSWORD,
    queries.resetPassword,
    variables,
    client,
  ),
  forgotPassword: (variables) => asyncMutation(
    store,
    types.FORGOT_PASSWORD,
    queries.forgotPassword,
    variables,
    client,
  ),
  validateToken: (variables) => asyncMutation(
    store,
    types.VALIDATE_TOKEN,
    queries.validateToken,
    variables,
    client,
  ),
  validateNoToken: () => ({
    type: types.VALIDATE_NO_TOKEN,
  }),
};
