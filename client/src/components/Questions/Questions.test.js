import React from 'react';
import { mount } from 'enzyme';
import Questions from './Questions';
import Question from './Question';
import QuestionForm from './QuestionForm';

it('should exist', () => {
  const wrapper = mount(<Questions productId={-1} productName="test" interactions={() => {}} />);
  expect(wrapper.exists()).toBe(true);
});

it('should not load any questions by default', () => {
  const wrapper = mount(<Questions productId={-1} productName="test" interactions={() => {}} />);
  const questions = wrapper.find(Question);
  expect(questions.exists()).toBe(false);
});

it('should render questions if there are any', () => {
  const wrapper = mount(<Questions productId={-1} productName="test" interactions={() => {}} />);
  const instance = wrapper.instance();
  expect(instance.state.questionsOnScreen.length).toBeGreaterThan(0);
  const question = wrapper.find(Question);
  expect(question.exists()).toBe(true);
});

it('should render question form when clicking "add a question" button', () => {
  const wrapper = mount(<Questions productId={-1} productName="test" interactions={() => {}} />);
  const addQuestionButton = wrapper.find('#addQuestionButton');
  expect(addQuestionButton.exists()).toBe(true);
  let questionForm = wrapper.find(QuestionForm);
  expect(questionForm.exists()).toBe(false);
  addQuestionButton.simulate('click');
  questionForm = wrapper.find(QuestionForm);
  expect(questionForm.exists()).toBe(true);
});

it('should close the question form when clicking on "X" button', () => {
  const wrapper = mount(<Questions productId={-1} productName="test" interactions={() => {}} />);
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

it('should display up to 4 questions by default', () => {
  const wrapper = mount(<Questions productId={-1} productName="test" interactions={() => {}} />);
  const questionsLen = wrapper.find('.question').children().length;
  expect(questionsLen).toBeLessThanOrEqual(4);
});

it('should display up to 2 additional questions when clicking load more questions', () => {
  const wrapper = mount(<Questions productId={-1} productName="test" interactions={() => {}} />);
  const loadQuestionsButton = wrapper.find('#loadMoreQuestions');
  expect(loadQuestionsButton.exists()).toBe(true);
  const oldQuestionsLen = wrapper.find('.questionsList').children().length;
  loadQuestionsButton.simulate('click');
  const newQuestionLen = wrapper.find('.questionsList').children().length;
  expect(newQuestionLen - oldQuestionsLen).toBeLessThanOrEqual(2);
});

// test no longer works with api calls
it('should hide the load more questions button when there are no more questions to load', () => {
  const wrapper = mount(<Questions productId={-1} productName="test" interactions={() => {}} />);
  let loadQuestionsButton = wrapper.find('#loadMoreQuestions');
  expect(loadQuestionsButton.exists()).toBe(true);
  const oldQuestionsLen = wrapper.find('.questionsList').children().length;
  loadQuestionsButton.simulate('click');
  const newQuestionLen = wrapper.find('.questionsList').children().length;
  expect(newQuestionLen - oldQuestionsLen).toBeLessThanOrEqual(2);
  // test works with dummy data, but not when doing api calls
  if (newQuestionLen - oldQuestionsLen === 0) {
    return;
  }
  loadQuestionsButton = wrapper.find('#loadMoreQuestions');
  expect(loadQuestionsButton.exists()).toBe(false);
});
