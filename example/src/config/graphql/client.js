import fetch from 'node-fetch';
import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from './tasks/fragment-types.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({ fragmentMatcher });
const httpLink = createHttpLink({ uri: process.env.REACT_APP_API_URL, fetch });

const authMiddleware = new ApolloLink((operation, forward) => {
  if (!window) return forward(operation);

  // add the authorization to the headers
  const token = localStorage.getItem('token');

  if (token) {
    operation.setContext({
      headers: {
        Authorization: token,
      },
    });
  }

  return forward(operation);
});

const afterwareLink = new ApolloLink((operation, forward) => (
  forward(operation).map(response => {
    const context = operation.getContext();
    const { response: { headers } } = context;

    // update token after query
    if (headers) {
      const token = headers.get('Authorization');

      if (token) {
        if (window) localStorage.setItem('token', token);
      }
    }

    return response;
  })
));

const client = new ApolloClient({
  link: afterwareLink.concat(concat(authMiddleware, httpLink)),
  cache,
});

export default client;
