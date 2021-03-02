import React from 'react';
import { mount } from 'enzyme';
import AnswerList from './AnswerList';
import Answer from './Answer';
import dummyAnswers from './dummyAnswers';

it('should exist', () => {
  const wrapper = mount(<AnswerList />);
  expect(wrapper.exists()).toBe(true);
});

it('should render answer components if there are answers', () => {
  const wrapper = mount(<AnswerList answers={dummyAnswers.results} />);
  const answer = wrapper.find(Answer);
  expect(answer.exists()).toBe(true);
});
