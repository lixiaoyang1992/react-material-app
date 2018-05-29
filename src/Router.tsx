import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import Main from "./Main";
import Login from "./Login";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <>
        <CssBaseline />
        <Route exact={true} path="/" component={Main} />
        <Route path="/login" component={Login} />
      </>
    </Router>
  </MuiThemeProvider>
);

export default App;
