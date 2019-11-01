import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Loading from './components/PageLoading';
import { createBrowserHistory } from 'history';

const Main = React.lazy(() => import('./pages/Main'));
const Setting = React.lazy(() => import('./pages/Setting'));

export const history = createBrowserHistory();

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/index" component={Main} />
          <Route path="/setting" component={Setting} />
          <Route component={Main} />
        </Switch>
      </React.Suspense>
    </ConnectedRouter>
  );
};

export default Routes;
