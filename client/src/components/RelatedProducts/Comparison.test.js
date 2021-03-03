import React from 'react';
import { mount, shallow } from 'enzyme';
import dummy from './dummy_related';

import RelatedProducts from './RelatedProducts';
import Comparison from './Comparison';
import Card from './Card';

describe('Test comparsion component', () => {
  it('should render comparsion component when click on card', () => {
    const wrapper = mount(<RelatedProducts />);
    const card = wrapper.find('.relatedProductsList').find(Card).first();

    expect(wrapper.find(Comparison).exists()).toBe(false);
    card.simulate('click');
    expect(wrapper.find(Comparison).exists()).toBe(true);
  });
});
