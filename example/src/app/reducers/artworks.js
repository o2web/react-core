import types from '../actions/artworks/types';

const initialState = {
  loading: false,
  artworks: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTWORKS:
      return { ...state, loading: true };
    case types.FETCH_ARTWORKS_SUCCESS:
      return { ...state, loading: false, artworks: action.payload.artworks.artworks };
    case types.FETCH_ARTWORKS_FAIL:
      return { ...state, loading: false };
    default:
  }

  return state;
}
