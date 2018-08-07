import * as React from 'react';

export interface IUCP {
  history: any;
}

export interface IState {
  name: string;
  login: () => void;
}

const defaultValue: IState = {
  name: 'login',
  login: () => {}
};
export const UserContext = React.createContext(defaultValue);

const withUser = <P extends IUCP>(UnwrappedComponent: React.ComponentType<P>) =>
  class WithBlueBackground extends React.Component<P, IState> {
    constructor(props: P) {
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
