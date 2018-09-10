import gql from 'graphql-tag';
import baseClient from './client';

const success = 'SUCCESS';
const fail = 'FAIL';

export function asyncQuery(store, type, query, params = {}, customClient = null) {
  return (dispatch) => {
    dispatch({ type });

    const locale = { locale: store.getState().i18nState.lang };
    const client = customClient || baseClient;

    return client.query({
      query: gql(query),
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
      variables: { ...locale, ...params },
    })
      .then((response) => {
        if (!response.errors) {
          dispatch({ type: `${type}_${success}`, payload: response.data });
        } else {
          dispatch({ type: `${type}_${fail}` });
        }
      })
      .catch((errors) => {
        dispatch({ type: `${type}_${fail}` });
        window.console.log(errors);
      });
  };
}

export function asyncMutation(store, type, mutation, params = {}, customClient = null) {
  return (dispatch) => {
    dispatch({ type });

    const locale = { locale: store.getState().i18nState.lang };
    const client = customClient || baseClient;

    return client.query({
      mutation: gql(mutation),
      fetchPolicy: 'network-only',
      variables: { ...locale, ...params },
    })
      .then((response) => {
        if (!response.errors) {
          dispatch({ type: `${type}_${success}`, payload: response.data });
        } else {
          dispatch({ type: `${type}_${fail}` });
        }
      })
      .catch((errors) => {
        dispatch({ type: `${type}_${fail}` });
        window.console.log(errors);
      });
  };
}
