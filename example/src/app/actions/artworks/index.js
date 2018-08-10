import { asyncQuery } from 'o2web-react-core';
import queries from './queries';
import types from './types';

export default {
  fetchArtwork: (variables) => asyncQuery(types.FETCH_ARTWORK, queries.fetchArtwork, variables),
  fetchArtworks: (variables) => asyncQuery(types.FETCH_ARTWORKS, queries.fetchArtworks, variables),
};
