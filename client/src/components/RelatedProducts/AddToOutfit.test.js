import React from 'react';
import { mount } from 'enzyme';
import RelatedProducts from './RelatedProducts';
import dummy from './dummy_related';
import Drop from './Drop';

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
    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length);
    button.simulate('click');
    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length + 1);
  });

  it('should only add the same product once', () => {
    const wrapper = mount(<RelatedProducts />);
    const instance = wrapper.instance();
    const button = wrapper.find('#addToOutfitButton');
    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length);
    button.simulate('click');
    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length + 1);
    button.simulate('click');
    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length + 1);
  });

  it('outfit list card should have drop component', () => {
    const wrapper = mount(<RelatedProducts />);
    const instance = wrapper.instance();

    if (instance.state.outfitList.length > 0) {
      expect(wrapper.find('.actionIconDrop').exists()).toBe(true);
    } else {
      expect(wrapper.find('.actionIconDrop').exists()).toBe(false);
    }
  });

  it('should drop product after click on drop component', () => {
    const wrapper = mount(<RelatedProducts />);
    const instance = wrapper.instance();
    const { id } = dummy.relatedProducts[0];
    const outfitList = wrapper.find('.outfitListWithAdd');
    const drop = outfitList.find(`#card${id}`).find(Drop);

    const check = (target) => {
      for (let i = 0; i < instance.state.outfitList.length; i += 1) {
        if (instance.state.outfitList[i].id === target) {
          return true;
        }
      }
      return false;
    };

    if (instance.state.outfitList.length > 0) {
      expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length);
      expect(check(id)).toBe(true);
      drop.simulate('click');
      // console.log(outfitList.find(`#card${id}`).instance());
      expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length - 1);
      expect(check(id)).toBe(false);
    } else {
      expect(wrapper.find('.actionIconDrop').exists()).toBe(false);
    }
  });
});
