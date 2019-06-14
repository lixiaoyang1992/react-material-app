import React from "react";
import AppBar from "./AppBar";
import Navigation from "./Navigation";
import { Switch, Route } from "react-router";
import TemporaryDrawer from "./Drawer";

const Favorites = React.lazy(() => import("../Favorites"));
const Folder = React.lazy(() => import("../Folder"));
const Nearby = React.lazy(() => import("../Nearby"));
const Recents = React.lazy(() => import("../Recents"));

const Main: React.FC = () => {
  return (
    <>
      <AppBar />
      <TemporaryDrawer />
      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/recents" component={Recents} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/nearby" component={Nearby} />
          <Route path="/folder" component={Folder} />>
        </Switch>
      </React.Suspense>
      <Navigation />
    </>
  );
};

export default Main;
