import React from 'react';
import ProductDetails from './components/ProductDetails.jsx';
import RelatedProducts from './components/RelatedProducts.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QA from './components/QA.jsx';
import App from './components/index.jsx';
import {shallow} from 'enzyme';

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