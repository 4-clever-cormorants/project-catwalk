import React from 'react';
import { mount } from 'enzyme';

import SizeSelector from './SizeSelector';

import styles from '../stylesDummyData';

test('should offer six sizes to choose from', () => {
  const wrapper = mount(<SizeSelector skus={styles.results[0].skus} onChange={() => {}} />);
  const sizeSelector = wrapper.find(SizeSelector);
  const sizes = wrapper.find('#sizeSelector').children().length;
  expect(sizeSelector.exists()).toBe(true);
  expect(sizes).toBe(6);
});
