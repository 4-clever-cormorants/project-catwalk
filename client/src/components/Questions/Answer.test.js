import React from 'react';
import { mount } from 'enzyme';
import Answer from './Answer';
import AnswerFooter from './AnswerFooter';

it('should exist', () => {
  const wrapper = mount(<Answer />);
  expect(wrapper.exists()).toBe(true);
});

it('should display the answer text', () => {
  const dummyAnswer = {
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
  };
  const wrapper = mount(<Answer answer={dummyAnswer} />);
  expect(wrapper.find('.answer').text()).toContain('Alias libero voluptas adipisci et quam iure vel.');
});

it('should render the answer footer', () => {
  const dummyAnswer = {
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
  };
  const wrapper = mount(<Answer answer={dummyAnswer} />);
  const answerFooter = wrapper.find(AnswerFooter);
  expect(answerFooter.exists()).toBe(true);
});
