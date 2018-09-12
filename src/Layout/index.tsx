import * as React from 'react';
import * as Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';
import withUser, { IUCP } from '../Context/User';
import Loading from './Loading';

const LoadableMian = Loadable({
  loader: () => import('../routes/Main'),
  loading: Loading
});

const LoadableLogin = Loadable({
  loader: () => import('../routes/Login'),
  loading: Loading
});

const LoadableMovie = Loadable({
  loader: () => import('../routes/Movie'),
  loading: Loading
});

class Layout extends React.Component<IUCP> {
  public render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={LoadableMian} />
        <Route path="/login" component={LoadableLogin} />
        <Route path="/movie/:id" component={LoadableMovie} />
      </Switch>
    );
  }
}

export default withUser(Layout);
