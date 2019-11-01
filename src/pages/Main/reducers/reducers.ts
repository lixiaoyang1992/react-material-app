import update from 'immutability-helper';
import { createReducer } from 'typesafe-actions';
import { toggleDrawerAction } from '../actions/actions';

export interface LayoutState {
  drawer: {
    visible: boolean;
  };
}

const initialState: LayoutState = {
  drawer: { visible: false },
};

const layoutReducer = createReducer(initialState).handleAction(
  toggleDrawerAction,
  (state, action) => {
    return update(state, {
      drawer: {
        visible: {
          $set: action.payload,
        },
      },
    });
  },
);

export default layoutReducer;
