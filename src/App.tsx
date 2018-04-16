import * as React from "react";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import sagaMonitor from "./sagaMonitor";
import { Provider } from "react-redux";

import Routers from "./Router";
import reducers from "./reducer";

// const middleware = [];
if (process.env.NODE_ENV !== "production") {
  // middleware.push(createLogger());
}

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const App = () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);

export default App;
