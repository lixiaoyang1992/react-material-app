import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CssBaseline from "material-ui/CssBaseline";
import Main from "./Main";
import Login from "./Login";

import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";
import blue from "material-ui/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <React.Fragment>
        <CssBaseline />
        <Route exact={true} path="/" component={Main} />
        <Route path="/login" component={Login} />
      </React.Fragment>
    </Router>
  </MuiThemeProvider>
);

export default App;
