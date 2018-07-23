import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UserContext } from '../withUser';

const styles = (theme: any) => ({
  container: {
    marginTop: 60
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 96
  }
});

interface IProps {
  classes: any;
}

const TextFieldMargins = (props: IProps) => {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <TextField
        label="电子邮箱地址或电话号码"
        id="margin-none"
        className={classes.textField}
        margin="normal"
      />
      <TextField
        label="密码"
        id="margin-none"
        className={classes.textField}
        margin="normal"
      />
      <div>
        <UserContext.Consumer>
          {({ login }) => (
            <Button
              className={classes.button}
              variant="raised"
              color="primary"
              onClick={login}
            >
              登录
            </Button>
          )}
        </UserContext.Consumer>
      </div>
    </div>
  );
};

export default withStyles(styles)(TextFieldMargins);
