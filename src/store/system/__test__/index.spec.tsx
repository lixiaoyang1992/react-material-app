import * as actions from "../actions";
import * as types from "../types";
import { systemReducer as reducer, initialState } from "../reducers";

describe("actions", () => {
  const sessionState = {
    loggedIn: false,
    session: "",
    userName: ""
  };
  it("should create an action to add a todo", () => {
    const expectedAction = {
      type: types.UPDATE_SESSION,
      payload: sessionState
    };
    expect(actions.updateSession(sessionState)).toEqual(expectedAction);
  });

  it("should handle UPDATE_SESSION", () => {
    expect(
      reducer(initialState, {
        type: types.UPDATE_SESSION,
        payload: sessionState
      })
    ).toEqual({
      loggedIn: false,
      session: "",
      userName: ""
    });
  });
});
