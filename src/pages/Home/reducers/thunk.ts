import { ThunkAction } from 'redux-thunk';
import { RootAction, RootState } from 'typesafe-actions';
import { IStory, fetchLatestNews } from '../../../services/zhihu';
import { fetchStorySuccessAction } from '../actions/actions';

export const fetchStoryAction = (): ThunkAction<
  Promise<IStory[]>,
  RootState,
  null,
  RootAction
> => async dispatch => {
  const data = await fetchLatestNews();
  dispatch(fetchStorySuccessAction(data.stories));
  return data.stories;
};
