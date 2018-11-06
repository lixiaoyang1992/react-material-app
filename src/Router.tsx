import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Main = React.lazy(() => import('./routes/Main'));

const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact={true} path="/" render={props => <Main {...props} />} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
