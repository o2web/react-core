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
        const data = (payload.length > 0) ? Object.values(payload)[0] : {};

        const errors = data.errors || [];
        const responseType = response.errors || errors.length > 0 ? fail : success;
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
        const data = (payload.length > 0) ? Object.values(payload)[0] : {};

        const errors = data.errors || [];
        const responseType = response.errors || errors.length > 0 ? fail : success;
        dispatch({ type: `${type}_${responseType}`, payload });

        if (data.errors instanceof Array && data.errors.length > 0) {
          const formErrors = data.errors.reduce(
            (object, { field, message }) => {
              const fields = field.split('.');

              if (fields.length === 1) {
                return { ...object, [field]: message };
              }

              const nestedFields = fields.reverse().reduce((nestedObject, nestedField, index) => {
                if (index === 0) {
                  return { ...nestedObject, [nestedField]: message };
                }

                return { [nestedField]: nestedObject };
              }, {});

              return { ...object, ...nestedFields };
            }, {});

          dispatch(stopSubmit(Object.keys(payload)[0], formErrors));
        }

        return payload;
      })
      .catch((errors) => {
        dispatch({ type: `${type}_${fail}` });
        window.console.log(errors);
      });
  };
}
