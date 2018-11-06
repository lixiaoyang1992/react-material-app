import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import List from '../AppBar';

describe('Main', () => {
  it('basic render', () => {
    const comp = <List />;
    const wrapper = shallow(comp);
    expect(wrapper.find('.a')).to.have.length(1);
  });
});
