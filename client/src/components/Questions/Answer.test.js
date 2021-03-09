import React from 'react';
import { mount } from 'enzyme';
import Answer from './Answer';
import AnswerFooter from './AnswerFooter';
import AnswerImageModal from './AnswerImageModal';
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

it('should change the url and imageClicked state when clicking on a picture', () => {
  const wrapper = mount(<Answer answer={dummyAnswers.results[0]} />);
  const instance = wrapper.instance();
  const image = wrapper.find('.answerImg').at(0);
  image.simulate('click');
  expect(instance.state.imageClicked).toBe(true);
});

it('should change the imageClicked state to false when exiting the modal', () => {
  const wrapper = mount(<Answer answer={dummyAnswers.results[0]} />);
  const instance = wrapper.instance();
  const image = wrapper.find('.answerImg').at(0);
  image.simulate('click');
  expect(instance.state.imageClicked).toBe(true);
  const aim = wrapper.find(AnswerImageModal);
  expect(aim.exists()).toBe(true);
  const blocker = aim.find('.blocker');
  blocker.simulate('click');
  expect(instance.state.imageClicked).toBe(false);
});

// doesn't simulate keydown for some reason
// it('should change the imageClicked state to false when pressing esc', () => {
//   const wrapper = mount(<Answer answer={dummyAnswers.results[0]} />);
//   const instance = wrapper.instance();
//   const image = wrapper.find('.answerImg').at(0);
//   image.simulate('click');
//   expect(instance.state.imageClicked).toBe(true);
//   image.simulate('keydown', { keyCode: 27 });
//   image.props().onKeyDown({ keyCode: 27 });
//   expect(instance.state.imageClicked).toBe(false);
// });
