import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import layoutReducer from '../pages/Main/reducers/reducers';
import zhihuReducer from '../pages/Home/reducers/reducers';
import { history } from '../Router';

const rootReducer = combineReducers({
  router: connectRouter(history),
  layout: layoutReducer,
  zhihu: zhihuReducer,
});

export default rootReducer;
