import React from 'react';
import { mount } from 'enzyme';
import RelatedProducts from './RelatedProducts';

describe('Test Button component', () => {
  it('should have a button component', () => {
    const wrapper = mount(<RelatedProducts />);
    const button = wrapper.find('#addToOutfitButton');

    expect(button.exists()).toBe(true);
  });

  it('should add current product to outfit list', () => {
    const wrapper = mount(<RelatedProducts />);
    const instance = wrapper.instance();
    const button = wrapper.find('#addToOutfitButton');
    expect(instance.state.outfitList.length).toEqual(0);
    button.simulate('click');
    expect(instance.state.outfitList.length).toEqual(1);
  });

  it('outfit list card should have drop component', () => {
    const wrapper = mount(<RelatedProducts />);
    const instance = wrapper.instance();
    const button = wrapper.find('#addToOutfitButton');

    expect(instance.state.outfitList.length).toEqual(0);
    expect(wrapper.find('.actionIconDrop').exists()).toBe(false);
    button.simulate('click');
    expect(wrapper.find('.actionIconDrop').exists()).toBe(true);
  });
});
