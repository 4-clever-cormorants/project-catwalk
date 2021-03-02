import React from 'react';
import { mount } from 'enzyme';
import dummy from './dummy_related';
/*
shallow
*/
import RelatedProducts from './RelatedProducts';
import List from './List';

it('should have a List components as Related Products', () => {
  const wrapper = mount(<RelatedProducts />);
  const relatedProductsList = wrapper.find('.relatedProductsList');

  expect(relatedProductsList.exists()).toBe(true);
});

it('should have card components in the related product list', () => {
  const wrapper = mount(<List className="relatedProductsList" productsList={dummy.relatedProducts} />);
  const firstCard = wrapper.find('.card').first();

  expect(firstCard.find('.cardName').text()).toBe('Gwendolyn Sweater');
  expect(firstCard.getDOMNode().getAttribute('id')).toBe('14373');
});
