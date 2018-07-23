import * as React from 'react';

export type ColorShade = 'light' | 'dark';

interface IProps {
  history: any;
}

export interface IUser {
  name: string;
  login: () => void;
}

const defaultValue: IUser = {
  name: 'user',
  login: () => {}
};

export const UserContext = React.createContext(defaultValue);

const withUser = <P extends IProps>(
  UnwrappedComponent: React.ComponentType<P>
) =>
  class WithBlueBackground extends React.Component<P, IUser> {
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
      console.log(this.state, this.props);
      return (
        <UserContext.Provider value={this.state}>
          <UnwrappedComponent {...this.props} />
        </UserContext.Provider>
      );
    }
  };

export default withUser;
