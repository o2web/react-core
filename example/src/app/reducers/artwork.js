import types from '../actions/artworks/types';

const initialState = {
  loading: false,
  artwork: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTWORK:
      return { ...state, loading: true };
    case types.FETCH_ARTWORK_SUCCESS:
      return { ...state, loading: false, artwork: action.payload.artwork };
    case types.FETCH_ARTWORK_FAIL:
      return { ...state, loading: false };
    default:
  }

  return state;
}
