import * as React from 'react';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import withMovie, { MovieContext } from '../../Context/Movie';

interface IProps {}

interface IState {}

class List extends React.Component<IProps, IState> {
  public render() {
    return (
      <div style={{ marginTop: 64 }}>
        <MovieContext.Consumer>
          {({ list }) => {
            return list.map(data => (
              <WingBlank key={data.title} size="lg">
                <WhiteSpace size="lg" />
                <Card>
                  <Card.Header title={data.title} />
                  <Card.Body>
                    <img src={data.images.small} alt={data.title} />
                  </Card.Body>
                </Card>
                <WhiteSpace size="lg" />
              </WingBlank>
            ));
          }}
        </MovieContext.Consumer>
      </div>
    );
  }
}

export default withMovie(List);
