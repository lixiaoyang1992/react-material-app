import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import withUser from '../Context/User';

const Loading = () => {
  return <div>Loading...</div>;
};

const LoadableMian = Loadable({
  loader: () => import('../Main'),
  loading: Loading
});

const LoadableLogin = Loadable({
  loader: () => import('../Login'),
  loading: Loading
});

class Layout extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={LoadableMian} />
        <Route path="/login" component={LoadableLogin} />
      </Switch>
    );
  }
}

export default withUser(Layout);
