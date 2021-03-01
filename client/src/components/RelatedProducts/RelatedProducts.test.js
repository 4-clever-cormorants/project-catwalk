import React from 'react';
import { mount } from 'enzyme';
/*
shallow
*/
import RelatedProducts from './RelatedProducts';

it('should have two List components as Related Products and your outfit list', () => {
  const wrapper = mount(<RelatedProducts />);
  const relatedProductsList = wrapper.find('.relatedProductsList');
  const yourOwnOutfitsList = wrapper.find('.relatedProductsList');

  expect(relatedProductsList.exists()).toBe(true);
  expect(yourOwnOutfitsList.exists()).toBe(true);
});
