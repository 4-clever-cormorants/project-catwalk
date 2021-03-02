import React from 'react';
import { mount } from 'enzyme';
/*
shallow
*/
import RatingsAndReviews from './RatingsAndReviews';

xit('should find render number of reviews', () => {
  const wrapper = mount(<RatingsAndReviews />);
  const addReview = wrapper.find('.AddReview');

  expect(addReview.exists()).toBe(true);

});
