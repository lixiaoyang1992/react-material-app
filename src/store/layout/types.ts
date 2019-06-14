// Describing the shape of the chat's slice of state

export interface LayoutState {
  drawer: {
    visible: boolean;
  };
}

// Describing the different ACTION NAMES available
export const TOGGLE_DRAWER = "TOGGLE_DRAWER";

interface ToggleDrawerAction {
  type: typeof TOGGLE_DRAWER;
  payload: boolean;
}

export type ChatActionTypes = ToggleDrawerAction;
