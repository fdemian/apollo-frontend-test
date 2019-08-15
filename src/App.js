import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import GreetingFetcher from './GreetingFetcher';

const client = new ApolloClient({uri: 'https://path/to/graphqlserver'});

const App = () => (
  <ApolloProvider client={client}>
    <GreetingFetcher />
  </ApolloProvider>
);

export default App;
