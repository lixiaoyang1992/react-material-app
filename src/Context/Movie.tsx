import * as React from 'react';

interface IProps {}

interface ICP {}

export interface IUser {
  list: any[];
}

const defaultValue: IUser = {
  list: []
};

export const MovieContext = React.createContext(defaultValue);

const withMovie = <P extends ICP>(UnwrappedComponent: React.ComponentType<P>) =>
  class WithBlueBackground extends React.Component<P & IProps, IUser> {
    constructor(props: P & IProps) {
      super(props);
      this.state = {
        list: []
      };

      fetch('/v2/movie/in_theaters')
        .then(res => res.json())
        .then(data => {
          console.log(data);
          this.setState({
            list: data.subjects
          });
        });
    }

    public render() {
      return (
        <MovieContext.Provider value={this.state}>
          <UnwrappedComponent {...this.props} />
        </MovieContext.Provider>
      );
    }
  };

export default withMovie;
