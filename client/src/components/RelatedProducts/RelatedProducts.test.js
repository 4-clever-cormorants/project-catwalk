import React from 'react';
import { mount } from 'enzyme';
import dummy from './dummy_related';

import RelatedProducts from './RelatedProducts';
import List from './List';

describe('Test Related Product list component', () => {
  const wrapper = mount(<RelatedProducts />);
  wrapper.setState({
    related: dummy.relatedProducts,
    current: dummy.currentProduct,
    outfitList: dummy.relatedProducts,
    load: true,
  });
  wrapper.update();

  it('should have a List components as Related Products', () => {
    const relatedProductsList = wrapper.find('.relatedProductsList');
    expect(relatedProductsList.exists()).toBe(true);
  });

  it('should have card components in the related product list', () => {
    const firstCard = wrapper.find('.relatedProductsList').find('.card').first();

    expect(firstCard.find('.cardName').text()).toBe('Gwendolyn Sweater');
    expect(firstCard.getDOMNode().getAttribute('id')).toBe('card14373');
  });

  it('related product card should have favor component', () => {
    expect(wrapper.find('.actionIconFavor').exists()).toBe(true);
  });
});
