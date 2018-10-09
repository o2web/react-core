import { async, createTypes } from 'redux-action-creator';

export default createTypes([
  ...async('SIGN_IN'),
  ...async('SIGN_UP'),
  ...async('VALIDATE_TOKEN'),
  'LOGOUT',
], 'USER');
