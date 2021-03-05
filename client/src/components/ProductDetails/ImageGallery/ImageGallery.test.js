import React from 'react';
import { mount } from 'enzyme';

import ImageGallery from './ImageGallery';
import DefaultView from './DefaultView';
import ThumbnailView from './ThumbnailView';

it('should render the image gallery with the default view and thumbnail(s)', () => {
  const style = {
    style_id: 76285,
    name: 'Teal',
    original_price: '398.00',
    sale_price: '254.00',
    default: true,
    photos: [
      {
        thumbnail_url: 'https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
        url: 'https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
      },
    ],
    skus: {
      440865: {
        quantity: 33,
        size: 'XS',
      },
      440866: {
        quantity: 10,
        size: 'S',
      },
      440867: {
        quantity: 11,
        size: 'M',
      },
      440868: {
        quantity: 43,
        size: 'L',
      },
      440869: {
        quantity: 37,
        size: 'XL',
      },
      440870: {
        quantity: 0,
        size: 'XXL',
      },
    },
  };
  const wrapper = mount(<ImageGallery styleId={76285} style={style} />);
  const imageGallery = wrapper.find('.imageGallery');
  const defaultView = wrapper.find(DefaultView);
  const thumbnailView = wrapper.find(ThumbnailView);
  expect(imageGallery.exists()).toBe(true);
  expect(defaultView.exists()).toBe(true);
  expect(thumbnailView.exists()).toBe(true);
});
