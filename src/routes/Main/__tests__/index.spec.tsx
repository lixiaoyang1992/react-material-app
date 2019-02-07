import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import AppBar from '../AppBar';

describe('Main', () => {
  it('basic render', () => {
    const comp = <AppBar />;
    const wrapper = shallow(comp);
    expect(wrapper.find('.a')).to.have.length(1);
  });
});
