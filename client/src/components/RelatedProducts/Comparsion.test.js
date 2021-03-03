import React from 'react';
import { mount, shallow } from 'enzyme';
import dummy from './dummy_related';

import RelatedProducts from './RelatedProducts';
import Comparsion from './Comparsion';
import Card from './Card';

describe('Test comparsion component', () => {
  it('should render comparsion component when click on card', () => {
    const wrapper = mount(<RelatedProducts />);
    const card = wrapper.find('.relatedProductsList').find(Card).first();

    expect(wrapper.find(Comparsion).exists()).toBe(false);
    card.simulate('click');
    expect(wrapper.find(Comparsion).exists()).toBe(true);
  });
});
