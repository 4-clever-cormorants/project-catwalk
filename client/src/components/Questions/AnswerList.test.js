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

it('should have a button to load more answers if there are more than 2 answers', () => {
  const wrapper = mount(<AnswerList answers={dummyAnswers.results} />);
  const loadButton = wrapper.find('.loadAnswers');
  expect(loadButton.exists()).toBe(true);
});

it('should not have a button to load more answers if there are 2 or less answers', () => {
  const lessThanTwoAnswers = [
    {
      answer_id: 800553,
      body: 'Alias libero voluptas adipisci et quam iure vel.',
      date: '2020-04-23T00:00:00.000Z',
      answerer_name: 'Kenton_Gleason',
      helpfulness: 17,
      photos: [
        {
          id: 682123,
          url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 682124,
          url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
    {
      answer_id: 800553,
      body: 'Alias libero voluptas adipisci et quam iure vel.',
      date: '2020-04-23T00:00:00.000Z',
      answerer_name: 'Kenton_Gleason',
      helpfulness: 17,
      photos: [
        {
          id: 682123,
          url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
        {
          id: 682124,
          url: 'https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
        },
      ],
    },
  ];
  const wrapper = mount(<AnswerList answers={lessThanTwoAnswers} />);
  const loadButton = wrapper.find('.loadAnswers');
  expect(loadButton.exists()).toBe(false);
});

it('should render up to 2 answers on page load', () => {
  const wrapper = mount(<AnswerList answers={dummyAnswers.results} />);
  const answerLen = wrapper.find('.answerList').children().filter(Answer).length;
  expect(answerLen).toBeLessThanOrEqual(2);
});

it('should render all answers when clicking on see more answers button', () => {
  const wrapper = mount(<AnswerList answers={dummyAnswers.results} />);
  const oldAnswerLen = wrapper.find('.answerList').children().filter(Answer).length;
  expect(oldAnswerLen).toBeLessThanOrEqual(2);
  const loadButton = wrapper.find('.loadAnswers');
  loadButton.simulate('click');
  const newAnswerLen = wrapper.find('.answerList').children().filter(Answer).length;
  expect(newAnswerLen).toBe(dummyAnswers.results.length);
});

it('should go back to up to 2 answers when clicking collapse answer button', () => {
  const wrapper = mount(<AnswerList answers={dummyAnswers.results} />);
  const oldAnswerLen = wrapper.find('.answerList').children().filter(Answer).length;
  expect(oldAnswerLen).toBeLessThanOrEqual(2);
  const loadButton = wrapper.find('.loadAnswers');
  loadButton.simulate('click');
  const newAnswerLen = wrapper.find('.answerList').children().filter(Answer).length;
  expect(newAnswerLen).toBe(dummyAnswers.results.length);
  const collapseButton = wrapper.find('.collapseAnswers');
  collapseButton.simulate('click');
  const collapsedAnswerLen = wrapper.find('.answerList').children().filter(Answer).length;
  expect(collapsedAnswerLen).toBe(oldAnswerLen);
});
