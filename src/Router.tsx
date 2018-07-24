import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Layout from './Layout';

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
        <Route path="/" render={props => <Layout {...props} />} />
      </>
    </Router>
  </MuiThemeProvider>
);

export default App;
