import * as React from 'react';
import { inTheaters } from '../services/movie';

interface IUCP {}

interface IState {
  list: ISubject[];
}

interface IRes {
  title: string;
  total: number;
  start: number;
  count: number;
  subjects: ISubject[];
}

interface ISubject {
  id: string;
  title: string;
  original_title: string;
  alt: string;
  images: {
    large: string;
    medium: string;
    small: string;
  };
  rating: {
    average: number;
    max: number;
    min: number;
    stars: number;
  };
  pubdates?: string;
  year: string;
  subtype: string;
}

const defaultState: IState = {
  list: []
};
export const MovieContext = React.createContext(defaultState);

const withMovie = <P extends IUCP>(
  UnwrappedComponent: React.ComponentType<P>
) =>
  class WithBlueBackground extends React.Component<P, IState> {
    constructor(props: P) {
      super(props);
      this.state = defaultState;
      this.list();
    }

    public list = async () => {
      const res: IRes = await inTheaters();
      this.setState({
        list: res.subjects
      });
    };

    public render() {
      return (
        <MovieContext.Provider value={this.state}>
          <UnwrappedComponent {...this.props} />
        </MovieContext.Provider>
      );
    }
  };

export default withMovie;
