import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

const cache = new InMemoryCache();

const httpLink = new HttpLink({ uri: 'http://localhost:3001/graphql', fetch });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const authorization = localStorage.getItem('Authorization');
  const expires = localStorage.getItem('Expires');
  const refreshToken = localStorage.getItem('RefreshToken');

  if (authorization) {
    const headers = {
      Authorization: authorization,
    };

    // set refresh token if token is expired and refresh token exists
    if (expires && new Date(expires * 1000) <= new Date() && refreshToken) {
      headers.RefreshToken = refreshToken;
    }

    operation.setContext({ headers });
  }

  return forward(operation);
});

const afterwareLink = new ApolloLink((operation, forward) => (
  forward(operation).map(response => {
    const context = operation.getContext();
    const { response: { headers } } = context;

    // update token after query
    if (headers) {
      ['Authorization', 'Expires', 'RefreshToken'].forEach((key) => {
        const header = headers.get(key);
        if (header) {
          localStorage.setItem(key, header);
        }
      });
    }

    return response;
  })
));

const client = new ApolloClient({
  link: afterwareLink.concat(concat(authMiddleware, httpLink)),
  cache,
});

export default client;
