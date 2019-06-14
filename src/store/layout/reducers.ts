import { TOGGLE_DRAWER, ChatActionTypes, LayoutState } from "./types";

const initialState: LayoutState = {
  drawer: { visible: false }
};

export function layoutReducer(
  state = initialState,
  action: ChatActionTypes
): LayoutState {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        drawer: { visible: action.payload }
      };
    default:
      return state;
  }
}
