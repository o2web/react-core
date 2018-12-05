import gql from 'graphql-tag';
import { stopSubmit } from 'redux-form';
import baseClient from './client';

const success = 'SUCCESS';
const fail = 'FAIL';

export function asyncQuery(
  store,
  type,
  query,
  params = {},
  customClient = null,
) {
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
        const payload = response.data;
        const data = Object.values(payload)[0] || {};

        const responseType = response.errors || data.errors ? fail : success;
        dispatch({ type: `${type}_${responseType}`, payload });

        return payload;
      })
      .catch((errors) => {
        dispatch({ type: `${type}_${fail}` });
        window.console.log(errors);
      });
  };
}

export function asyncMutation(
  store,
  type,
  mutation,
  params = {},
  customClient = null,
) {
  return (dispatch) => {
    dispatch({ type });

    const locale = { locale: store.getState().i18nState.lang };
    const client = customClient || baseClient;

    return client.mutate({
      mutation: gql(mutation),
      fetchPolicy: 'no-cache',
      variables: { ...locale, ...params },
    })
      .then((response) => {
        const payload = response.data;
        const data = Object.values(payload)[0] || {};

        const responseType = response.errors || data.errors ? fail : success;
        dispatch({ type: `${type}_${responseType}`, payload });

        if (data.errors instanceof Object) {
          const errors = data.errors.reduce(
            (obj, { field, message }) => ({ ...obj, [field]: message }), {},
          );

          dispatch(stopSubmit(Object.keys(payload)[0], errors));
        }

        return payload;
      })
      .catch((errors) => {
        dispatch({ type: `${type}_${fail}` });
        window.console.log(errors);
      });
  };
}
