import * as React from 'react';
import ActionBar from './ActionBar';
import Form from './Form';
import withUser from '../withUser';

interface IProps {
  history: any;
}

class Main extends React.Component<IProps, {}> {
  public render() {
    return (
      <React.Fragment>
        <ActionBar />
        <Form />
      </React.Fragment>
    );
  }
}

export default withUser(Main);
