import React from 'react';
import { mount } from 'enzyme';
import Questions from './Questions';
import Question from './Question';
import QuestionForm from './QuestionForm';

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

it('should render question form when clicking "add a question" button', () => {
  const wrapper = mount(<Questions />);
  const addQuestionButton = wrapper.find('#addQuestionButton');
  expect(addQuestionButton.exists()).toBe(true);
  let questionForm = wrapper.find(QuestionForm);
  expect(questionForm.exists()).toBe(false);
  addQuestionButton.simulate('click');
  questionForm = wrapper.find(QuestionForm);
  expect(questionForm.exists()).toBe(true);
});

it('should close the question form when clicking on "X" button', () => {
  const wrapper = mount(<Questions />);
  const addQuestionButton = wrapper.find('#addQuestionButton');
  expect(addQuestionButton.exists()).toBe(true);
  let questionForm = wrapper.find(QuestionForm);
  expect(questionForm.exists()).toBe(false);
  addQuestionButton.simulate('click');
  questionForm = wrapper.find(QuestionForm);
  expect(questionForm.exists()).toBe(true);
  const exitButton = questionForm.find('#exitButton');
  exitButton.simulate('click');
  questionForm = wrapper.find(QuestionForm);
  expect(questionForm.exists()).toBe(false);
});
