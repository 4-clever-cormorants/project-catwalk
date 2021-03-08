import React from 'react';
import { mount } from 'enzyme';

import ImageGallery from './ImageGallery';
import DefaultView from './DefaultView';
import Thumbnail from './Thumbnail';

import styles from '../stylesDummyData';

it('should render the image gallery with the default view and thumbnail(s)', () => {
  const wrapper = mount(<ImageGallery
    styleId={76285}
    style={styles.results[0]}
    id={0}
    leftClick={() => {}}
    rightClick={() => {}}
    renderDefaultView={() => {}}
  />);
  const imageGallery = wrapper.find('.imageGallery');
  const defaultView = wrapper.find(DefaultView);
  const thumbnail = wrapper.find(Thumbnail);
  expect(imageGallery.exists()).toBe(true);
  expect(defaultView.exists()).toBe(true);
  expect(thumbnail.exists()).toBe(true);
});
