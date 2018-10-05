import types from '../actions/user/types';

const initialState = {
  loading: false,
  authenticated: false,
  id: 0,
  email: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.GET_CURRENT_USER:
      return { ...state, loading: true };
    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        authenticated: action.payload.authenticated,
        userProfile: action.payload.userProfile,
      };
    case types.GET_CURRENT_USER_FAIL:
      return { ...state, loading: false, authenticated: false };
    case types.AUTHENTICATE_USER:
      return {
        ...state,
        authenticated: true,
        id: 1,
        email: 'mr.untel@globetrotter.net',
      };
    case types.LOGOUT_USER:
      return {
        ...state,
        authenticated: false,
        id: 0,
        email: '',
      };
    default:
  }

  return state;
}
