import { UPDATE_SESSION, SystemState, SystemActionTypes } from "./types";

export const initialState: SystemState = {
  loggedIn: true,
  session: "",
  userName: "Lixiaoyang"
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
