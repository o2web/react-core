import gql from 'graphql-tag';
import client from './client';
import store from '../../../example/src/config/redux/store';

const success = 'SUCCESS';
const fail = 'FAIL';

export function asyncQuery(type, query, params = {}) {
  return (dispatch) => {
    dispatch({ type });

    const locale = { locale: store.getState().i18nState.lang };

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

export function asyncMutation(type, mutation, params = {}) {
  return (dispatch) => {
    dispatch({ type });

    const locale = { locale: store.getState().i18nState.lang };

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
