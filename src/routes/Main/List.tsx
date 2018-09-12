import * as React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import withMovie, { MovieContext } from '../../Context/Movie';
import { Link } from 'react-router-dom';

interface IProps {}

interface IState {}

class List extends React.Component<IProps, IState> {
  public render() {
    return (
      <MovieContext.Consumer>
        {({ list }) => {
          return list.map(data => (
            <WingBlank key={data.title} size="lg">
              <WhiteSpace size="lg" />
              <Card>
                <Card.Header
                  title={<Link to={'/movie/' + data.id}>{data.title}</Link>}
                />
                <Card.Body>
                  {/* <img src={data.images.small} alt={data.title} /> */}
                </Card.Body>
              </Card>
              <WhiteSpace size="lg" />
            </WingBlank>
          ));
        }}
      </MovieContext.Consumer>
    );
  }
}

export default withMovie(List);
