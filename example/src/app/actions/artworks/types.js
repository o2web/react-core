import { async, createTypes } from 'redux-action-creator';

export default createTypes([
  ...async('FETCH_ARTWORK'),
  ...async('FETCH_ARTWORKS'),
], 'ARTWORKS');
