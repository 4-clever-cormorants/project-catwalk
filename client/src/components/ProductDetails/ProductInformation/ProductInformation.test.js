import React from 'react';
import { mount } from 'enzyme';

import ProductInformation from './ProductInformation';
import Rating from './Rating';
import Category from './Category';
import Title from './Title';
import Price from './Price';
import Shipping from './Shipping';
import Description from './Description';

import product from '../productDummyData';

test('ProductInformation should display the rating, category, title, price, shipping, and description', () => {
  const wrapper = mount(<ProductInformation product={product} />);
  const productInformation = wrapper.find(ProductInformation);
  const productInformationLen = wrapper.find('.info').children().length;
  const rating = wrapper.find(Rating);
  const category = wrapper.find(Category);
  const title = wrapper.find(Title);
  const price = wrapper.find(Price);
  const shipping = wrapper.find(Shipping);
  const description = wrapper.find(Description);
  expect(productInformation.exists()).toBe(true);
  expect(productInformationLen).toBe(5);
  expect(rating.exists()).toBe(true);
  expect(category.exists()).toBe(true);
  expect(title.exists()).toBe(true);
  expect(price.exists()).toBe(true);
  expect(shipping.exists()).toBe(true);
  expect(description.exists()).toBe(true);
});
