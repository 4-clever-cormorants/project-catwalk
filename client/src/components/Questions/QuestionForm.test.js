import React from 'react';
import { mount } from 'enzyme';
import QuestionForm from './QuestionForm';

it('should exist', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} />);
  expect(wrapper.exists()).toBe(true);
});

it('should have question field, nickname field, email field, and submit button', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} />);
  const questionField = wrapper.find('#questionField');
  expect(questionField.exists()).toBe(true);
  const nicknameField = wrapper.find('#questionNickname');
  expect(nicknameField.exists()).toBe(true);
  const emailField = wrapper.find('#questionEmail');
  expect(emailField.exists()).toBe(true);
  const submitButton = wrapper.find('#submitQuestion');
  expect(submitButton.exists()).toBe(true);
});
