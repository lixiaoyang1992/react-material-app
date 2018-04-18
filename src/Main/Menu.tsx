import * as React from "react";
import { withStyles, StyleRulesCallback } from "material-ui/styles";
import { Drawer, Divider } from "material-ui";

const drawerWidth = 240;

const styles: StyleRulesCallback = (theme: any) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
});

function ClippedDrawer(props: any) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <div>1111</div>
        <Divider />
        <div>2222</div>
      </Drawer>
    </div>
  );
}

export default withStyles(styles)(ClippedDrawer);
