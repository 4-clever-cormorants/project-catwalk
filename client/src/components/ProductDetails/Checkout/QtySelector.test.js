import React from 'react';
import { mount } from 'enzyme';

import QtySelector from './QtySelector';

test('QtySelector offers qty options to select', () => {
  const wrapper = mount(<QtySelector qty={32} />);
  const qtySelector = wrapper.find(QtySelector);
  const optionsLen = wrapper.find('#qtySelector').children().filter('.option').length;
  expect(qtySelector.exists()).toBe(true);
  expect(optionsLen).toBe(33);
});

// want to test that the qty selector reflects the qty of the sku that the style selector has ....
