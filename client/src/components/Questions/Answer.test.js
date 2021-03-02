import React from 'react';
import { mount } from 'enzyme';
import Answer from './Answer';
import AnswerFooter from './AnswerFooter';
import dummyAnswers from './dummyAnswers';

it('should exist', () => {
  const wrapper = mount(<Answer />);
  expect(wrapper.exists()).toBe(true);
});

it('should display the answer text', () => {
  const wrapper = mount(<Answer answer={dummyAnswers.results[0]} />);
  expect(wrapper.find('.answer').text()).toContain('Alias libero voluptas adipisci et quam iure vel.');
});

it('should render the answer footer', () => {
  const wrapper = mount(<Answer answer={dummyAnswers.results[0]} />);
  const answerFooter = wrapper.find(AnswerFooter);
  expect(answerFooter.exists()).toBe(true);
});
