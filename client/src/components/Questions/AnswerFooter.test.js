import React from 'react';
import { mount } from 'enzyme';
import AnswerFooter from './AnswerFooter';
import dummyAnswers from './dummyAnswers';

it('should exist', () => {
  const wrapper = mount(<AnswerFooter />);
  expect(wrapper.exists()).toBe(true);
});

it('should contain the username', () => {
  const wrapper = mount(<AnswerFooter answers={dummyAnswers.results[0]} />);
  const username = wrapper.find('.answerName');
  expect(username.text()).toContain('Kenton_Gleason');
});

it('should have a date in the format of Month DD, YYYY', () => {
  const regex = /(.*)(((Jan(uary)?|Feb(ruary)?|Mar(ch)?|Apr(il)?|May|Jun(e)?|Jul(y)?|Aug(ust)?|Sep(tember)?|Oct(ober)?|Nov(ember)?|Dec(ember)?)\s+\d{1,2},\s+\d{4}))(.*)/gm;
  const wrapper = mount(<AnswerFooter answers={dummyAnswers.results[0]} />);
  const date = wrapper.find('.answerDate');
  expect(date.text()).toMatch(regex);
});

it('should show how helpful the answer was', () => {
  const wrapper = mount(<AnswerFooter answers={dummyAnswers.results[0]} />);
  const helpful = wrapper.find('.answerHelpful');
  expect(helpful.text()).toContain('17');
});

it('should have a report button', () => {
  const wrapper = mount(<AnswerFooter answers={dummyAnswers.results[0]} />);
  const report = wrapper.find('.answerReport');
  expect(report.exists()).toBe(true);
});

it('should increase the helpful count by 1 when clicking helpful button', () => {
  const wrapper = mount(<AnswerFooter answers={dummyAnswers.results[0]} />);
  const instance = wrapper.instance();
  expect(instance.state.increased).toBe(false);
  const oldHelpfulness = instance.state.answerHelpfulness;
  const helpfulButton = wrapper.find('.answerHelpfulButton');
  helpfulButton.simulate('click');
  expect(instance.state.answerHelpfulness - oldHelpfulness).toBe(1);
  expect(instance.state.increased).toBe(true);
});

it('should disable helpful button after clicking', () => {
  const wrapper = mount(<AnswerFooter answers={dummyAnswers.results[0]} />);
  const instance = wrapper.instance();
  expect(instance.state.increased).toBe(false);
  const oldHelpfulness = instance.state.answerHelpfulness;
  let helpfulButton = wrapper.find('.answerHelpfulButton');
  helpfulButton.simulate('click');
  expect(instance.state.answerHelpfulness - oldHelpfulness).toBe(1);
  expect(instance.state.increased).toBe(true);
  helpfulButton = wrapper.find('.answerHelpfulButton');
  expect(helpfulButton.props().disabled).toBe(true);
});

it('should replace the report button with reported text after reporting', () => {
  const wrapper = mount(<AnswerFooter answers={dummyAnswers.results[0]} />);
  const instance = wrapper.instance();
  expect(instance.state.reported).toBe(false);
  let reportButton = wrapper.find('.answerReportButton');
  reportButton.simulate('click');
  expect(instance.state.reported).toBe(true);
  reportButton = wrapper.find('.answerReportButton');
  expect(reportButton.exists()).toBe(false);
  expect(wrapper.find('.answerReport').text()).toContain('Reported');
});
