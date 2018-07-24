import * as React from 'react';
import ActionBar from './ActionBar';
import Form from './Form';

interface IProps {}

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

export default Main;
