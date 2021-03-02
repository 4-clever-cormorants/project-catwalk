import React from 'react';
import { mount } from 'enzyme';

import ImageGallery from './ImageGallery';
import DefaultView from './DefaultView';
import ThumbnailView from './ThumbnailView';

it('should render the image gallery with the default view and thumbnail(s)', () => {
  const wrapper = mount(<ImageGallery />);
  const imageGallery = wrapper.find('.imageGallery');
  const defaultView = wrapper.find(DefaultView);
  const thumbnailView = wrapper.find(ThumbnailView);
  expect(imageGallery.exists()).toBe(true);
  expect(defaultView.exists()).toBe(true);
  expect(thumbnailView.exists()).toBe(true);
});
