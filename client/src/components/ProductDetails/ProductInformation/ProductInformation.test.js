import React from 'react';
import { mount } from 'enzyme';

import ProductInformation from './ProductInformation';
import Category from './Category';
import Title from './Title';
import Price from './Price';

import product from '../productDummyData';

test('ProductInformation should display the category, title, and price', () => {
  const wrapper = mount(<ProductInformation product={product} />);
  const productInformation = wrapper.find(ProductInformation);
  const productInformationLen = wrapper.find('.productInformation').children().length;
  const category = wrapper.find(Category);
  const title = wrapper.find(Title);
  const price = wrapper.find(Price);
  expect(productInformation.exists()).toBe(true);
  expect(productInformationLen).toBe(7);
  expect(category.exists()).toBe(true);
  expect(title.exists()).toBe(true);
  expect(price.exists()).toBe(true);
});
