import axios from 'axios';
import actions from '../../app/actions/promises';

const success = 'SUCCESS';
const fail = 'FAIL';

export function asyncGet(
  store,
  type,
  query,
  params,
) {
  return (dispatch) => {
    dispatch({ type });

    const promise = axios.get(`${process.env.REACT_APP_REST_API_URL}${query}${params || ''}`)
      .then(response => {
        const payload = response.data;
        dispatch({ type: `${type}_${success}`, payload });

        return payload;
      })
      .catch((errors) => {
        dispatch({ type: `${type}_${fail}` });
        if (window) window.console.log(errors);
      });

    store.dispatch(actions.addPromise(promise));

    return promise;
  };
}

export default asyncGet;
