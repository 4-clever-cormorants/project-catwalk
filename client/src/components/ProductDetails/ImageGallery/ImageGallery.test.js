import React from 'react';
import { mount } from 'enzyme';

import ProductDetails from '../ProductDetails';
// import ImageGallery from './ImageGallery';
import DefaultView from './DefaultView';
import Thumbnail from './Thumbnail';

import product from '../productDummyData';
import styles from '../stylesDummyData';

describe('Image Gallery tests', () => {
  const wrapper = mount(<ProductDetails productId={14933} />);
  wrapper.setState({
    product,
    styleId: styles.results[0].style_id,
    styles,
    style: styles.results[0],
    id: 0,
    cart: [],
    rating: { average: 3, totalRatings: 35 },
    load: true,
  });
  wrapper.update();
  const imageGallery = wrapper.find('.imageGallery');
  const defaultView = wrapper.find(DefaultView);
  const thumbnail = wrapper.find(Thumbnail);

  it('should render the image gallery with the default view and thumbnail(s)', () => {
    expect(imageGallery.exists()).toBe(true);
    expect(defaultView.exists()).toBe(true);
    expect(thumbnail.exists()).toBe(true);
  });

  it('should initially have a left arrow to go to the next photo', () => {
    const rightArrow = wrapper.find('.right');
    expect(rightArrow.exists()).toBe(true);
  });
});
