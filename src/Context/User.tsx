import * as React from 'react';

interface IProps {
  history: any;
}

interface ICP {}

export interface IUser {
  name: string;
  login: () => void;
}

const defaultValue: IUser = {
  name: 'user',
  login: () => {}
};

export const UserContext = React.createContext(defaultValue);

const withUser = <P extends ICP>(UnwrappedComponent: React.ComponentType<P>) =>
  class WithBlueBackground extends React.Component<P & IProps, IUser> {
    constructor(props: P & IProps) {
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
      this.props.history.push('/');
    };

    public render() {
      return (
        <UserContext.Provider value={this.state}>
          <UnwrappedComponent {...this.props} />
        </UserContext.Provider>
      );
    }
  };

export default withUser;
