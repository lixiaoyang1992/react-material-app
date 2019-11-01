import { LocationChangeAction, LOCATION_CHANGE } from 'connected-react-router';
import { Middleware } from 'redux';
import { Location } from 'history';
import { ThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'typesafe-actions';

export type historyListener = (l: Location, d: ThunkDispatch<RootState, null, RootAction>) => any;

let subs: historyListener[] = [];

function createHistoryMiddleware(): Middleware {
  return ({ dispatch }) => next => action => {
    if (action.type === LOCATION_CHANGE) {
      const {
        payload: { location },
      } = action as LocationChangeAction;
      for (let f of subs) {
        f(location, dispatch);
      }
    }
    return next(action);
  };
}

export default createHistoryMiddleware;

export const subscriptionHistory = (func: historyListener) => {
  subs.push(func);
  return () => {
    subs = subs.filter(obj => obj !== func);
  };
};
