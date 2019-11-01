import { routerActions } from 'connected-react-router';
import * as layoutActions from '../pages/Main/actions/actions';
import * as zhihuActions from '../pages/Home/actions/actions';

export default {
  router: routerActions,
  layout: layoutActions,
  zhihu: zhihuActions,
};
