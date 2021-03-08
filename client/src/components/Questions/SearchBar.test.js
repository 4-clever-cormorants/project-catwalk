import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './SearchBar';
import dummyQuestions from './dummyQuestions';

it('should exist', () => {
  const wrapper = mount(<SearchBar
    questions={dummyQuestions}
    showSearchedQuestions={() => {}}
    revertToOriginal={() => {}}
  />);
  expect(wrapper.exists()).toBe(true);
});

it('should have a text input', () => {
  const wrapper = mount(<SearchBar
    questions={dummyQuestions}
    showSearchedQuestions={() => {}}
    revertToOriginal={() => {}}
  />);
  const inputField = wrapper.find('input');
  expect(inputField.exists()).toBe(true);
});

it('should return questions that have the search term in the body', () => {
  const wrapper = mount(<SearchBar
    questions={dummyQuestions}
    showSearchedQuestions={() => {}}
    revertToOriginal={() => {}}
  />);
  const instance = wrapper.instance();
  instance.state.searchTerm = 'commodi';
  instance.searchQuestions((questionHits, searchTerm) => {
    expect(questionHits.length).toBe(1);
    expect(questionHits[0].question_body).toContain(searchTerm);
  });
});
