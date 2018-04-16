import * as React from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const styles = (theme: any) => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3
  }),
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 80
  }
});

function PaperSheet(props: any) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(obj => (
        <Paper key={obj} className={classes.root} elevation={2}>
          <Typography variant="headline" component="h3">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
      ))}
    </div>
  );
}
export default withStyles(styles)(PaperSheet);
