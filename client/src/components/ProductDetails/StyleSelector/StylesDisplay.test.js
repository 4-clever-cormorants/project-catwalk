import React from 'react';
import { mount } from 'enzyme';

import StylesDisplay from './StylesDisplay';
import Style from './Style';

import styles from '../stylesDummyData';

test('StylesDisplay should render the styles of the given product', () => {
  const wrapper = mount(<StylesDisplay styles={styles.results} onClick={() => {}} />);
  const stylesDisplay = wrapper.find(StylesDisplay);
  const len = wrapper.find('.stylesDisplay').children().filter('.style').length;
  const style = wrapper.find(Style);
  expect(stylesDisplay.exists()).toBe(true);
  expect(len).toBeGreaterThan(1);
  expect(style.exists()).toBe(true);
});
