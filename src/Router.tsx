import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store/index";

const Main = React.lazy(() => import("./pages/Main"));
const Setting = React.lazy(() => import("./pages/Setting"));

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/index" component={Main} />
          <Route path="/setting" component={Setting} />
          <Route component={Main} />
        </Switch>
      </React.Suspense>
    </ConnectedRouter>
  );
};

export default App;
