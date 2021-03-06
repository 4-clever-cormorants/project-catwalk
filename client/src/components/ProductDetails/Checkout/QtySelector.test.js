import React from 'react';
import { mount } from 'enzyme';

import QtySelector from './QtySelector';

test('QtySelector offers qty options to select, with a max of 15 options', () => {
  const wrapper = mount(<QtySelector qty={32} />);
  const qtySelector = wrapper.find(QtySelector);
  const optionsLen = wrapper.find('#qtySelector').children().filter('.option').length;
  expect(qtySelector.exists()).toBe(true);
  expect(optionsLen).toBe(16);
});

test('QtySelector offers no options when qty is null', () => {
  const wrapper = mount(<QtySelector qty={null} />);
  const qtySelector = wrapper.find(QtySelector);
  const optionsLen = wrapper.find('#qtySelector').children().filter('.option').length;
  expect(qtySelector.exists()).toBe(true);
  expect(optionsLen).toBe(1);
});
// want to test that the qty selector reflects the qty of the sku that the style selector has ....
