import React from 'react';
import logo from './logo.svg';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import GreetingFetcher from './GreetingFetcher';

const client = new ApolloClient(/*{uri: 'https://48p1r2roz4.sse.codesandbox.io',}*/);

const App = () => (
  <ApolloProvider client={client}>
    <GreetingFetcher />
  </ApolloProvider>
);

export default App;
