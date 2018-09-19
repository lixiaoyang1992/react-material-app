import * as React from 'react';
import List from './List';
import Nav from './Nav';

const Main: React.SFC = () => {
  return (
    <React.Fragment>
      <Nav />
      <List />
    </React.Fragment>
  );
};

export default Main;
