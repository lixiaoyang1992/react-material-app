import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Routers from './Router';

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Routers />
      </>
    </MuiThemeProvider>
  );
};

export default App;
