import { createStandardAction } from 'typesafe-actions';
import { IStory } from '../../../services/zhihu';

const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS';

export const fetchStorySuccessAction = createStandardAction(FETCH_STORY_SUCCESS)<IStory[]>();
