import { asyncQuery } from '../../../config/graphql/async-action-creator';
import graphQLClient from '../../../config/graphql/client';
import queries from './queries';
import types from './types';
import store from '../../../config/redux/store';

export default {
  fetchArtwork: (variables) => asyncQuery(
    store,
    types.FETCH_ARTWORK,
    queries.fetchArtwork,
    variables,
    graphQLClient,
  ),
  fetchArtworks: (variables) => asyncQuery(
    store,
    types.FETCH_ARTWORKS,
    queries.fetchArtworks,
    variables,
    graphQLClient,
  ),
};
