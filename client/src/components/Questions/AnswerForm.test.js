import React from 'react';
import { mount } from 'enzyme';
import AnswerForm from './AnswerForm';

it('should exist', () => {
  const wrapper = mount(<AnswerForm exitAnswerForm={() => true} questionBody="test" />);
  expect(wrapper.exists()).toBe(true);
});

it('should have an answer field, a nickname field, an email field, photo fields, and a submit button', () => {
  const wrapper = mount(<AnswerForm exitAnswerForm={() => true} questionBody="test" />);
  const answerField = wrapper.find('.answerField');
  expect(answerField.exists()).toBe(true);
  const nicknameField = wrapper.find('.answerNickname');
  expect(nicknameField.exists()).toBe(true);
  const emailField = wrapper.find('.answerEmail');
  expect(emailField.exists()).toBe(true);
  const photos = wrapper.find('.uploadPhoto');
  expect(photos.exists()).toBe(true);
  const submitAnswer = wrapper.find('.submitAnswer');
  expect(submitAnswer.exists()).toBe(true);
});
