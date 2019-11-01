import update from 'immutability-helper';
import { createReducer } from 'typesafe-actions';
import { IStory } from '../../../services/zhihu';
import { fetchStorySuccessAction } from '../actions/actions';
import { subscriptionHistory } from '../../../middleware/historyMiddleware';
import { fetchStoryAction } from './thunk';

export interface HomeState {
  list: IStory[];
}

const initialState: HomeState = {
  list: [],
};

const layoutReducer = createReducer(initialState).handleAction(
  fetchStorySuccessAction,
  (state, action) => {
    return update(state, {
      list: {
        $set: action.payload,
      },
    });
  },
);

export default layoutReducer;

subscriptionHistory(async ({ pathname, search }, dispatch) => {
  await dispatch(fetchStoryAction());
});
