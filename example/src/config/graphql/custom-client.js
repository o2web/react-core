import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_API_URL,
  }),
  cache,
});

export default client;
