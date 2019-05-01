import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { sendMessage } from "../../store/chat/actions";
import { AppState } from "../../store";
import { updateSession } from "../../store/system/actions";

interface TOwnProps {}

export const ButtonAppBar: React.SFC<
  TOwnProps & TStateProps & TDispatchProps
> = props => {
  return (
    <div className="app-bar">
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit" className="app-bar-title">
            {props.system.userName}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: AppState, ownProp: TOwnProps) => {
  return {
    system: state.system
  };
};

type TStateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = { sendMessage, updateSession };

type TDispatchProps = typeof mapDispatchToProps;

export default connect<TStateProps, TDispatchProps, TOwnProps, AppState>(
  mapStateToProps,
  mapDispatchToProps
)(ButtonAppBar);
