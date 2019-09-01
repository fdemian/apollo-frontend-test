import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import VideoUpload from './VideoUpload/VideoUpload';
//import GreetingFetcher from './GreetingFetcher';
import client from './configureClient';

import './App.css';

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <VideoUpload />
    </div>
  </ApolloProvider>
);

export default App;
