import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
});

const MeterialContainer: React.FC = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </MuiThemeProvider>
  );
};

export default MeterialContainer;
