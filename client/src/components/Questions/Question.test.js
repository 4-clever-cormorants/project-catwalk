import React from 'react';
import { mount } from 'enzyme';
import Question from './Question';
import AnswerList from './AnswerList';

it('should exist', () => {
  const wrapper = mount(<Question />);
  expect(wrapper.exists()).toBe(true);
});

it('should render answers if there are any', () => {
  const wrapper = mount(<Question />);
  const instance = wrapper.instance();
  expect(instance.state.answers.results.length).toBeGreaterThan(0);
  const answers = wrapper.find(AnswerList);
  expect(answers.exists()).toBe(true);
});

it('should have a button to add more answers', () => {
  const wrapper = mount(<Question />);
  const addAnswer = wrapper.find('.addAnswer');
  expect(addAnswer.exists()).toBe(true);
});
