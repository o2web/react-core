import { async, createTypes } from 'redux-action-creator';

export default createTypes([
  ...async('SIGN_IN'),
  ...async('SIGN_UP'),
  ...async('VALIDATE_TOKEN'),
  ...async('FORGOT_PASSWORD'),
  ...async('RESET_PASSWORD'),
  ...async('UPDATE_ACCOUNT'),
  'VALIDATE_NO_TOKEN',
  'SIGN_OUT',
], 'USER');
