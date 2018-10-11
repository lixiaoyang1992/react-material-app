import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
  return (
    <Router>
      <Route path="/" render={props => <Layout {...props} />} />
    </Router>
  );
};

export default App;
