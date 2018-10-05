// libs
import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';
import { reducer as formReducer } from 'redux-form';
import artworkReducer from './artwork';
import artworksReducer from './artworks';
import userReducer from './user';

const rootReducer = combineReducers({
  i18nState,
  form: formReducer,
  artwork: artworkReducer,
  artworks: artworksReducer,
  user: userReducer,
});

export default rootReducer;
