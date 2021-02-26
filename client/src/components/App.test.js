import React from 'react';
import { mount } from 'enzyme';
/*
shallow
*/
import ProductDetails from './ProductDetails/ProductDetails';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import QA from './Questions/Questions';
import App from './App';

it('should render all the components', () => {
  const wrapper = mount(<App />);
  const app = wrapper.find('#app');
  expect(app.exists()).toBe(true);
  const PD = wrapper.find(ProductDetails);
  const RP = wrapper.find(RelatedProducts);
  const RR = wrapper.find(RatingsAndReviews);
  const Q = wrapper.find(QA);
  expect(wrapper.exists()).toBe(true);
  expect(PD.exists()).toBe(true);
  expect(RP.exists()).toBe(true);
  expect(RR.exists()).toBe(true);
  expect(Q.exists()).toBe(true);
});
