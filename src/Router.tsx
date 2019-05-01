import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Main = React.lazy(() => import("./pages/Main"));

const App = () => {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact={true} path="/" component={Main} />
        </Switch>
      </React.Suspense>
    </Router>
  );
};

export default App;
