import React from 'react';
import { mount } from 'enzyme';
import Answer from './Answer';

it('should exist', () => {
  const wrapper = mount(<Answer />);
  expect(wrapper.exists()).toBe(true);
});
