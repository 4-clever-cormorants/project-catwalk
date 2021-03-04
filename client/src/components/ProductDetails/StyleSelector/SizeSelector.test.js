import React from 'react';
import { mount } from 'enzyme';

import SizeSelector from './SizeSelector';
import styles from '../stylesDummyData';

test('SizeSelector should exist', () => {
  const wrapper = mount(<SizeSelector
    skus={styles.results[0].skus}
    onChange={() => {}}
  />);
  const sizeSelector = wrapper.find(SizeSelector);
  const optionsLen = wrapper.find('#sizeSelector').children().filter('option').length;
  expect(sizeSelector.exists()).toBe(true);
  expect(optionsLen).toBe(6);
});
