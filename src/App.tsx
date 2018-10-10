import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Routers from './Router';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <Routers />
  </ApolloProvider>
);

export default App;
