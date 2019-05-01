import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import MeterialContainer from "./MeterialContainer";
import Routers from "./Router";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";
import "./style.less";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <MeterialContainer>
      <Routers />
    </MeterialContainer>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
