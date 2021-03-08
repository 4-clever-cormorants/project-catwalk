import React from 'react';
import { mount } from 'enzyme';
import QuestionForm from './QuestionForm';

it('should exist', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  expect(wrapper.exists()).toBe(true);
});

it('should have question field, nickname field, email field, and submit button', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const questionField = wrapper.find('#questionField');
  expect(questionField.exists()).toBe(true);
  const nicknameField = wrapper.find('#questionNickname');
  expect(nicknameField.exists()).toBe(true);
  const emailField = wrapper.find('#questionEmail');
  expect(emailField.exists()).toBe(true);
  const submitButton = wrapper.find('#submitQuestion');
  expect(submitButton.exists()).toBe(true);
});

it('should have the product name', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const productName = wrapper.find('.questionForm');
  expect(productName.text()).toContain('test');
});

it('should change question, nickname, and email state when typing into respective fields', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const instance = wrapper.instance();
  const questionField = wrapper.find('#questionField');
  const nicknameField = wrapper.find('#questionNickname');
  const emailField = wrapper.find('#questionEmail');
  questionField.simulate('change', { target: { value: 'Yes?' } });
  expect(instance.state.questionBody).toBe('Yes?');
  nicknameField.simulate('change', { target: { value: 'Nick' } });
  expect(instance.state.nickname).toBe('Nick');
  emailField.simulate('change', { target: { value: 'example@example.com' } });
  expect(instance.state.email).toBe('example@example.com');
});

it('should have isValid email return true on a valid email', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const instance = wrapper.instance();
  const emailField = wrapper.find('#questionEmail');
  emailField.simulate('change', { target: { value: 'example@example.com' } });
  expect(instance.isValidEmail()).toBe(true);
});

it('should have isValidEmail return false on an invalid email', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const instance = wrapper.instance();
  const emailField = wrapper.find('#questionEmail');
  emailField.simulate('change', { target: { value: 'badEmail' } });
  expect(instance.isValidEmail()).toBe(false);
});

it('should show an error message if question body is empty', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const instance = wrapper.instance();
  const nicknameField = wrapper.find('#questionNickname');
  const emailField = wrapper.find('#questionEmail');
  nicknameField.simulate('change', { target: { value: 'Nick' } });
  emailField.simulate('change', { target: { value: 'example@example.com' } });
  const submitButton = wrapper.find('#submitQuestion');
  submitButton.simulate('click');
  expect(instance.state.submitError).toBe(true);
  expect(instance.state.errorMessages[0]).toContain('Question');
  const errorMessage = wrapper.find('.errorMessage');
  expect(errorMessage.exists()).toBe(true);
  expect(errorMessage.text()).toContain('Question');
});

it('should show an error message if nickname is empty', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const instance = wrapper.instance();
  const questionField = wrapper.find('#questionField');
  const emailField = wrapper.find('#questionEmail');
  questionField.simulate('change', { target: { value: 'Yes?' } });
  emailField.simulate('change', { target: { value: 'example@example.com' } });
  const submitButton = wrapper.find('#submitQuestion');
  submitButton.simulate('click');
  expect(instance.state.submitError).toBe(true);
  expect(instance.state.errorMessages[0]).toContain('Nickname');
  const errorMessage = wrapper.find('.errorMessage');
  expect(errorMessage.exists()).toBe(true);
  expect(errorMessage.text()).toContain('Nickname');
});

it('should show an error message if email is empty', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const instance = wrapper.instance();
  const questionField = wrapper.find('#questionField');
  const nicknameField = wrapper.find('#questionNickname');
  questionField.simulate('change', { target: { value: 'Yes?' } });
  nicknameField.simulate('change', { target: { value: 'Nick' } });
  const submitButton = wrapper.find('#submitQuestion');
  submitButton.simulate('click');
  expect(instance.state.submitError).toBe(true);
  expect(instance.state.errorMessages[0]).toContain('Email');
  const errorMessage = wrapper.find('.errorMessage');
  expect(errorMessage.exists()).toBe(true);
  expect(errorMessage.text()).toContain('Email');
});

it('should show an error message if email has wrong format', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const instance = wrapper.instance();
  const questionField = wrapper.find('#questionField');
  const nicknameField = wrapper.find('#questionNickname');
  const emailField = wrapper.find('#questionEmail');
  questionField.simulate('change', { target: { value: 'Yes?' } });
  nicknameField.simulate('change', { target: { value: 'Nick' } });
  emailField.simulate('change', { target: { value: 'badEmail' } });
  const submitButton = wrapper.find('#submitQuestion');
  submitButton.simulate('click');
  expect(instance.state.submitError).toBe(true);
  expect(instance.state.errorMessages[0]).toContain('The email address provided is not in correct email format');
  const errorMessage = wrapper.find('.errorMessage');
  expect(errorMessage.exists()).toBe(true);
  expect(errorMessage.text()).toContain('The email address provided is not in correct email format');
});

it('should show an error message if email has wrong format', () => {
  const wrapper = mount(<QuestionForm exitQuestionForm={() => true} productId={1} productName="test" />);
  const instance = wrapper.instance();
  const questionField = wrapper.find('#questionField');
  const nicknameField = wrapper.find('#questionNickname');
  const emailField = wrapper.find('#questionEmail');
  questionField.simulate('change', { target: { value: 'Yes?' } });
  nicknameField.simulate('change', { target: { value: 'Nick' } });
  emailField.simulate('change', { target: { value: 'example@example.com' } });
  const submitButton = wrapper.find('#submitQuestion');
  submitButton.simulate('click');
  expect(instance.state.submitError).toBe(false);
  expect(instance.state.errorMessages.length).toBe(0);
  const errorMessage = wrapper.find('.errorMessage');
  expect(errorMessage.exists()).toBe(false);
});
