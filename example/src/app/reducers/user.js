import types from '../actions/user/types';

const initialState = {
  validatingToken: true,
  loading: false,
  authenticated: false,
  data: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.VALIDATE_TOKEN:
      window.console.log('VALIDATE_TOKEN');
      return { ...state, validatingToken: true };
    case types.VALIDATE_TOKEN_SUCCESS:
      return {
        ...state,
        data: action.payload.validateToken.user,
        validatingToken: false,
        authenticated: action.payload.validateToken.valid,
      };
    case types.VALIDATE_TOKEN_FAIL:
      return { ...state, data: {}, authenticated: false, validatingToken: false };
    case types.VALIDATE_NO_TOKEN:
      return { ...state, validatingToken: false };
    case types.SIGN_IN:
      window.console.log('SIGN_IN');
      return { ...state, loading: true };
    case types.SIGN_IN_SUCCESS:
      return { ...state, data: action.payload.signIn.user, authenticated: true };
    case types.SIGN_IN_FAIL:
      return { ...state, data: {}, authenticated: false };
    case types.SIGN_UP:
      window.console.log('SIGN_UP');
      return { ...state, loading: true };
    case types.SIGN_UP_SUCCESS:
      return { ...state, data: action.payload.signUp.user, authenticated: true };
    case types.SIGN_UP_FAIL:
      return { ...state, data: {}, authenticated: false };
    case types.SIGN_OUT:
      return { ...state, data: {}, authenticated: false };
    default:
  }

  return state;
}
