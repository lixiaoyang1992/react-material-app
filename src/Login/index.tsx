import * as React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = (theme: any) => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  }
});

const TextFieldMargins = (props: any) => {
  const { classes } = props;
  return (
    <Paper
      elevation={4}
      style={{
        margin: "100px auto",
        width: 500,
        padding: 32
      }}
    >
      <div>登录</div>
      <TextField
        label="电子邮箱地址或电话号码"
        id="margin-none"
        className={classes.textField}
        margin="normal"
      />
      <div>
        <Button variant="raised" color="primary">
          <Link to="/">登录</Link>
        </Button>
      </div>
    </Paper>
  );
};

export default withStyles(styles)(TextFieldMargins);
