import React from 'react';
import { mount } from 'enzyme';
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
  it('should render all features in current product', () => {
    const wrapper = mount(<Comparison
      current={dummy.currentProduct}
      clicked={dummy.relatedProducts[0]}
    />);

    for (let i = 0; i < dummy.currentProduct.features.length; i += 1) {
      expect(wrapper.find('.feature').find({ children: dummy.currentProduct.features[i].feature }).exists()).toBe(true);
    }
  });
  it('should also render all features in target product and do not create duplicates', () => {
    const wrapper = mount(<Comparison
      current={dummy.currentProduct}
      clicked={dummy.relatedProducts[0]}
    />);

    for (let i = 0; i < dummy.relatedProducts[0].features.length; i += 1) {
      expect(wrapper.find('.feature').find({ children: dummy.relatedProducts[0].features[i].feature }).exists()).toBe(true);
      expect(wrapper.find('.feature').find({ children: dummy.relatedProducts[0].features[i].feature }).length).toEqual(1);
    }
  });
});
