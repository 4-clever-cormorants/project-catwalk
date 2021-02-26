import React from 'react';
import { shallow } from 'enzyme';
import ProductDetails from './components/ProductDetails/ProductDetails';
import RelatedProducts from './components/RelatedProducts';
import RatingsAndReviews from './components/RatingsAndReviews';
import QA from './components/Questions';
import App from './index';

it ('should render all the components', function() {
  const wrapper = shallow(<App />);
  const PD = wrapper.find(<ProductDetails />);
  const RP = wrapper.find(<RelatedProducts />);
  const RR = wrapper.find(<RatingsAndReviews />);
  const Q = wrapper.find(<QA />);
  expect(PD.exists()).toBe(true);
  expect(RP.exists()).toBe(true);
  expect(RR.exists()).toBe(true);
  expect(Q.exists()).toBe(true);
})