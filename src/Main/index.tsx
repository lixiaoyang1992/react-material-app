import * as React from 'react';
import ActionBar from './ActionBar';
import List from './List';
import withUser from '../withUser';

const Main = () => {
  return (
    <React.Fragment>
      <ActionBar />
      <List />
    </React.Fragment>
  );
};

export default withUser(Main);
