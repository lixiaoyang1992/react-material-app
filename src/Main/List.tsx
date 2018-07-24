import * as React from 'react';

interface IMainProps {
  login?: () => void;
}

class List extends React.Component<IMainProps, {}> {
  public render() {
    return <div style={{ marginTop: 100, marginLeft: 50 }}>list</div>;
  }
}

export default List;
