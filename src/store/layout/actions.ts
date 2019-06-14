import { TOGGLE_DRAWER } from "./types";

export function toggleDrawerAction(visible: boolean) {
  return {
    type: TOGGLE_DRAWER,
    payload: visible
  };
}
