import { expect } from "chai";
import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "../../../store";
import AppBar from "../AppBar";

const store = configureStore();

describe("AppBar", () => {
  it("basic render", () => {
    const comp = (
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    const wrapper = mount(comp);
    expect(wrapper.find(".app-bar")).to.have.length(1);
  });
});
