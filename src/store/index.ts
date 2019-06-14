import {
  connectRouter,
  routerMiddleware,
  RouterState
} from "connected-react-router";
import { createBrowserHistory, History } from "history";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { chatReducer } from "./chat/reducers";
import { systemReducer } from "./system/reducers";
import { SystemState } from "./system/types";
import { ChatState } from "./chat/types";
import { layoutReducer } from "./layout/reducers";
import { LayoutState } from "./layout/types";

export const history = createBrowserHistory();

const rootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    system: systemReducer,
    chat: chatReducer,
    layout: layoutReducer
  });

export interface AppState {
  router: RouterState;
  system: SystemState;
  chat: ChatState;
  layout: LayoutState;
}

export default function configureStore() {
  const store = createStore(
    rootReducer(history),
    compose(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );

  return store;
}
