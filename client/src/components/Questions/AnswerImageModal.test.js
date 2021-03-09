import React from 'react';
import { mount } from 'enzyme';
import AnswerImageModal from './AnswerImageModal';

it('should exist', () => {
  const wrapper = mount(<AnswerImageModal url="https://tenor.com/view/eddie-moon-moon-eddie-knead-cat-cute-gif-16898306" exitModal={() => {}} />);
  expect(wrapper.exists()).toBe(true);
});
