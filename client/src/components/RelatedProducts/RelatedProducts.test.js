import React from 'react';
import { mount } from 'enzyme';
import dummy from './dummy_related';

import RelatedProducts from './RelatedProducts';
import List from './List';

describe('Test Related Product list component', () => {
  it('should have a List components as Related Products', () => {
    const wrapper = mount(<RelatedProducts />);
    const relatedProductsList = wrapper.find('.relatedProductsList');

    expect(relatedProductsList.exists()).toBe(true);
  });

  it('should have card components in the related product list', () => {
    const wrapper = mount(<RelatedProducts />);
    const firstCard = wrapper.find('.relatedProductsList').find('.card').first();

    expect(firstCard.find('.cardName').text()).toBe('Gwendolyn Sweater');
    expect(firstCard.getDOMNode().getAttribute('id')).toBe('card14373');
  });

  it('related product card should have favor component', () => {
    const wrapper = mount(<RelatedProducts />);
    expect(wrapper.find('.actionIconFavor').exists()).toBe(true);
  });
});
