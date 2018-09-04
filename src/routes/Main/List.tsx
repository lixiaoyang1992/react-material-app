import * as React from 'react';
import withNews, { NewsContext } from '../../Context/News';

interface IProps {}

interface IState {}

class List extends React.Component<IProps, IState> {
  public render() {
    return (
      <div style={{ marginTop: 100, marginLeft: 50 }}>
        <NewsContext.Consumer>
          {({ list }) => {
            return list.map(data => <div key={data.title}>{data.title}</div>);
          }}
        </NewsContext.Consumer>
      </div>
    );
  }
}

export default withNews(List);
