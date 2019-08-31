import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { createUploadLink } from 'apollo-upload-client';
import ApolloClient from 'apollo-boost';
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
