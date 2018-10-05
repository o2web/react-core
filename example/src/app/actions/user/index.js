import { asyncQuery } from 'o2web-react-core';
import queries from './queries';
import types from './types';
import store from '../../../config/redux/store';
import client from '../../../config/graphql/custom-client';

export default {
  getCurrentUser: (variables) => asyncQuery(
    store,
    types.GET_CURRENT_USER,
    queries.getCurrentUser,
    variables,
    client,
  ),
  authenticateUser: () => ({
    type: types.AUTHENTICATE_USER,
  }),
  logoutUser: () => ({
    type: types.LOGOUT_USER,
  }),
};
