import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import GreetingFetcher from './GreetingFetcher';
//import ExchangeRates from './ExchangeRates';

const client = new ApolloClient({
  /*uri: 'https://48p1r2roz4.sse.codesandbox.io'*/
});

const App = () => (
  <ApolloProvider client={client}>
    <GreetingFetcher />
  </ApolloProvider>
);

export default App;
