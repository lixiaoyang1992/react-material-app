import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import List from '../ActionBar';

describe('Button', () => {
  it('rerendersnd title', () => {
    const comp = <List />;
    const wrapper = shallow(comp);
    expect(wrapper.find('.checkable-tag')).to.have.length(1);
  });
});
