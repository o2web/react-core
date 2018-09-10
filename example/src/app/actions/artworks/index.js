import { asyncQuery } from 'o2web-react-core';
import queries from './queries';
import types from './types';
import store from '../../../config/redux/store';
import client from '../../../config/graphql/custom-client';

export default {
  fetchArtwork: (variables) => asyncQuery(
    store,
    types.FETCH_ARTWORK,
    queries.fetchArtwork,
    variables,
    client,
  ),
  fetchArtworks: (variables) => asyncQuery(
    store,
    types.FETCH_ARTWORKS,
    queries.fetchArtworks,
    variables,
    client,
  ),
};
