import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import GreetingFetcher from './GreetingFetcher';

const client = new ApolloClient({});

const App = () => (
  <ApolloProvider client={client}>
    <GreetingFetcher />
  </ApolloProvider>
);

export default App;
