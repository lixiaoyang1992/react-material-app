import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from './AppBar';
import { Switch, Route } from 'react-router';
import TemporaryDrawer from './Drawer';
import Loading from '../../components/PageLoading';

const Favorites = React.lazy(() => import('../Favorites'));
const Home = React.lazy(() => import('../Home'));

const Main: React.FC = () => {
  return (
    <>
      <AppBar />
      <Toolbar />
      <TemporaryDrawer />
      <React.Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/recents" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Route component={Home} />
        </Switch>
      </React.Suspense>
    </>
  );
};

export default Main;
