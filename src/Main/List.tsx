import * as React from 'react';
import Button from '@material-ui/core/Button';
import { UserContext } from '../withUser';

interface IMainProps {
  login?: () => void;
}

class List extends React.Component<IMainProps, {}> {
  public render() {
    return (
      <div style={{ marginTop: 100, marginLeft: 50 }}>
        <UserContext.Consumer>
          {({ login }) => (
            <Button variant="raised" color="primary" onClick={login}>
              登录
            </Button>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default List;
