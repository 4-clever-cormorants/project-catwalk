import React from 'react';
import { mount } from 'enzyme';
import Question from './Question';
import AnswerList from './AnswerList';
import AnswerForm from './AnswerForm';

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
  const addAnswer = wrapper.find('.addAnswerButton');
  expect(addAnswer.exists()).toBe(true);
});

it('should render answer form when clicking add answer button', () => {
  const wrapper = mount(<Question />);
  const addAnswerButton = wrapper.find('.addAnswerButton');
  expect(addAnswerButton.exists()).toBe(true);
  let addAnswerForm = wrapper.find(AnswerForm);
  expect(addAnswerForm.exists()).toBe(false);
  addAnswerButton.simulate('click');
  addAnswerForm = wrapper.find(AnswerForm);
  expect(addAnswerForm.exists()).toBe(true);
  // const exitButton = addAnswerForm.find('.exitButton');
  // exitButton.simulate('click');
  // addAnswerForm = wrapper.find(AnswerForm);
  // expect(addAnswerForm.exists()).toBe(true);
});

it('should close the modal when clicking exit button', () => {
  const wrapper = mount(<Question />);
  const addAnswerButton = wrapper.find('.addAnswerButton');
  expect(addAnswerButton.exists()).toBe(true);
  let addAnswerForm = wrapper.find(AnswerForm);
  expect(addAnswerForm.exists()).toBe(false);
  addAnswerButton.simulate('click');
  addAnswerForm = wrapper.find(AnswerForm);
  expect(addAnswerForm.exists()).toBe(true);
  const exitButton = addAnswerForm.find('.exitButton');
  exitButton.simulate('click');
  addAnswerForm = wrapper.find(AnswerForm);
  expect(addAnswerForm.exists()).toBe(false);
});
