import { createStandardAction } from 'typesafe-actions';

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';

export const toggleDrawerAction = createStandardAction(TOGGLE_DRAWER)<boolean>();
