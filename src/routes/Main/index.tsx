import * as React from 'react';
import AppBar from './AppBar';
import withUser, { IUCP } from '../../Context/User';

class Main extends React.Component<IUCP> {
  public render() {
    return (
      <React.Fragment>
        <AppBar />
      </React.Fragment>
    );
  }
}

export default withUser(Main);
