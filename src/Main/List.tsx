import * as React from 'react';
import withMovie, { MovieContext } from '../Context/Movie';

interface IProps {}

interface IState {}

class List extends React.Component<IProps, IState> {
  public render() {
    return (
      <div style={{ marginTop: 100, marginLeft: 50 }}>
        <MovieContext.Consumer>
          {({ list }) => {
            return list.map(data => <div key={data.title}>{data.title}</div>);
          }}
        </MovieContext.Consumer>
      </div>
    );
  }
}

export default withMovie(List);
