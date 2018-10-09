import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

const httpLink = new HttpLink({ uri: process.env.REACT_APP_API_URL });

const authMiddleware = new ApolloLink((operation, forward) => {
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
        localStorage.setItem('token', token);
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
