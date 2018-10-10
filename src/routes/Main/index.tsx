import * as React from 'react';
import List from './List';
import AppBar from './AppBar';

const Main: React.SFC = () => {
  return (
    <React.Fragment>
      <AppBar />
      <div className="a" style={{ paddingTop: 80 }}>
        <List />
      </div>
    </React.Fragment>
  );
};

export default Main;
