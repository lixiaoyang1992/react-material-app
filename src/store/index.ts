import { routerMiddleware } from 'connected-react-router';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createHistoryMiddleware from '../middleware/historyMiddleware';
import { history } from '../Router';
import getInitialState from './getInitialState';
import rootReducer from './root-reducers';

const initState = getInitialState();

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history), // for dispatching history actions
      createHistoryMiddleware(),
      // ... other middlewares ...
    ),
  ),
);

export default store;
