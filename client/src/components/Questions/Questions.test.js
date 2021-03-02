import React from 'react';
import { mount } from 'enzyme';
import Questions from './Questions';
import Question from './Question';

it('should exist', () => {
  const wrapper = mount(<Questions />);
  expect(wrapper.exists()).toBe(true);
});

it('should render questions if there are any', () => {
  const wrapper = mount(<Questions />);
  const instance = wrapper.instance();
  expect(instance.state.questions.results.length).toBeGreaterThan(0);
  const question = wrapper.find(Question);
  expect(question.exists()).toBe(true);
});
