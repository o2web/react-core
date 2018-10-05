import { async, createTypes } from 'redux-action-creator';

export default createTypes([
  ...async('GET_CURRENT_USER'),
  'AUTHENTICATE_USER',
  'LOGOUT_USER',
], 'USER');
