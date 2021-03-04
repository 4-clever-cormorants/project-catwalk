import React from 'react';
import { mount } from 'enzyme';

import ProductInformation from './ProductInformation';
import Category from './Category';
import Title from './Title';
import Price from './Price';

import product from '../productDummyData';

test('product information should render all the components', () => {
  const wrapper = mount(<ProductInformation product={product} />);
  const productInformation = wrapper.find(ProductInformation);
  const category = wrapper.find(Category);
  const title = wrapper.find(Title);
  const price = wrapper.find(Price);
  expect(productInformation.exists()).toBe(true);
  expect(category.exists()).toBe(true);
  expect(title.exists()).toBe(true);
  expect(price.exists()).toBe(true);
});
