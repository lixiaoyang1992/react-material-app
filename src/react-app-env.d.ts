/// <reference types="react-scripts" />
import { StateType, ActionType } from 'typesafe-actions';

declare module 'classnames';

declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./store/index').default>;

  export type RootState = StateType<typeof import('./store/root-reducers').default>;

  export type RootAction = ActionType<typeof import('./store/root-action').default>;

  interface Types {
    RootAction: RootAction;
  }
}
