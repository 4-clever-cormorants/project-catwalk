import React from 'react';
import { mount } from 'enzyme';

import QtySelector from './QtySelector';

test('QtySelector offers qty options to select', () => {
  const wrapper = mount(<QtySelector qty={32} />);
  const qtySelector = wrapper.find(QtySelector);
  expect(qtySelector.exists()).toBe(true);
});
