import React from 'react';
import { mount } from 'enzyme';
import AnswerList from './AnswerList';

it('should exist', () => {
  const wrapper = mount(<AnswerList />);
  expect(wrapper.exists()).toBe(true);
});
