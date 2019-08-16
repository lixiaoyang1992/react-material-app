import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routers from "./Router";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "./theme";
import "./style.less";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Routers />
      </MuiThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
