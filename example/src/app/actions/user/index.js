import { asyncMutation } from '../../../config/graphql/async-action-creator';
import graphQLClient from '../../../config/graphql/client';
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
  updateAccount: (variables) => asyncMutation(
    store,
    types.UPDATE_ACCOUNT,
    queries.updateAccount,
    variables,
    graphQLClient,
  ),
  resetPassword: (variables) => asyncMutation(
    store,
    types.RESET_PASSWORD,
    queries.resetPassword,
    variables,
    graphQLClient,
  ),
  forgotPassword: (variables) => asyncMutation(
    store,
    types.FORGOT_PASSWORD,
    queries.forgotPassword,
    variables,
    graphQLClient,
  ),
  validateToken: (variables) => asyncMutation(
    store,
    types.VALIDATE_TOKEN,
    queries.validateToken,
    variables,
    graphQLClient,
  ),
  validateNoToken: () => ({
    type: types.VALIDATE_NO_TOKEN,
  }),
};
