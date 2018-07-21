import * as React from 'react';
import ActionBar from './ActionBar';
import List from './List';
import { UserContext, IUser } from './UserContext';

interface IProps {}

class Main extends React.Component<IProps, IUser> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: '',
      login: this.handleLogin
    };
  }

  public handleLogin = () => {
    this.setState({
      name: 'lee'
    });
  };

  public render() {
    return (
      <UserContext.Provider value={this.state}>
        <ActionBar />
        <List />
      </UserContext.Provider>
    );
  }
}

export default Main;
