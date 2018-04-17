import * as React from "react";
import { withStyles } from "material-ui/styles";
import { AppBar, Toolbar, Typography, IconButton } from "material-ui";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function SimpleAppBar(props: any) {
  const { classes } = props;
  return (
    <div
      className={classes.root}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
          <Link to="/login">
            <AccountCircle
              style={{
                color: "white"
              }}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(SimpleAppBar);