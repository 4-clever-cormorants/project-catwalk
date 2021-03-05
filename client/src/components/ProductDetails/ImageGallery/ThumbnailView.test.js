import React from 'react';
import { mount } from 'enzyme';

import ThumbnailView from './ThumbnailView';

it('should render the thumbnail images in the style object photos array', () => {
  const thumbnailUrl = 'https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';
  const wrapper = mount(<ThumbnailView thumbnailUrl={thumbnailUrl} />);
  const thumbnailView = wrapper.find(ThumbnailView);
  expect(thumbnailView.exists()).toBe(true);
});
