import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import * as Loadable from 'react-loadable';

const Loading = () => {
  return <div>Loading...</div>;
};

const LoadableMian = Loadable({
  loader: () => import('./Main'),
  loading: Loading,
});

const LoadableLogin = Loadable({
  loader: () => import('./Login'),
  loading: Loading,
});

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <>
        <CssBaseline />
        <Route exact={true} path="/" component={LoadableMian} />
        <Route path="/login" component={LoadableLogin} />
      </>
    </Router>
  </MuiThemeProvider>
);

export default App;
