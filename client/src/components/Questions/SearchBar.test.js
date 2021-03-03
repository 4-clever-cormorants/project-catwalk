import React from 'react';
import { mount } from 'enzyme';
import SearchBar from './SearchBar';

it('should exist', () => {
  const wrapper = mount(<SearchBar />);
  expect(wrapper.exists()).toBe(true);
});

it('should have a text input', () => {
  const wrapper = mount(<SearchBar />);
  const inputField = wrapper.find('input');
  expect(inputField.exists()).toBe(true);
});
