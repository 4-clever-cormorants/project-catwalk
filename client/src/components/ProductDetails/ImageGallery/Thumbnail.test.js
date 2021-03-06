import React from 'react';
import { mount } from 'enzyme';

import Thumbnail from './Thumbnail';

import styles from '../stylesDummyData';

it('should render the thumbnail images in the style object photos array', () => {
  const wrapper = mount(<Thumbnail style={styles.results[0]} styleSelector={() => {}} />);
  const thumbnailView = wrapper.find(Thumbnail);
  expect(thumbnailView.exists()).toBe(true);
});
