import React from 'react';
import axios from 'axios';
import { mount } from 'enzyme';
import RelatedProducts from './RelatedProducts';
import dummy from './dummy_related';
import Drop from './Drop';

import regeneratorRuntime from 'regenerator-runtime';

jest.mock('axios');

axios.get.mockImplementation((url) => {
  if (url === `/related/relatedProducts?product_id=${dummy.currentProduct.id}`) {
    return Promise.resolve({ data: [dummy.currentProduct, ...dummy.relatedProducts] });
  }
  if (url === '/related/outfitList') {
    return Promise.resolve({ data: dummy.relatedProducts });
  }
  if (url === '/wishList/getAll') {
    return Promise.resolve({ data: [] });
  }
  return undefined;
});

axios.post.mockImplementation((url) => {
  if (url === `/related/outfitList?product_id=${dummy.currentProduct.id}`) {
    return Promise.resolve({});
  }
  return undefined;
});

// Helper function returns a promise that resolves after all other promise mocks,
// even if they are chained like Promise.resolve().then(...)
// Technically: this is designed to resolve on the next macrotask
function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

describe('Test Button component', () => {
  const wrapper = mount(<RelatedProducts productId={dummy.currentProduct.id} />);
  it('should have a button component', () => {
    wrapper.setState({
      related: dummy.relatedProducts,
      current: dummy.currentProduct,
      outfitList: dummy.relatedProducts,
      load: true,
      outfitLoad: true,
    });
    const button = wrapper.find('#addToOutfitButton');

    expect(button.exists()).toBe(true);
  });

  it('should add current product to outfit list', async () => {
    wrapper.setState({
      related: dummy.relatedProducts,
      current: dummy.currentProduct,
      outfitList: dummy.relatedProducts,
      load: true,
      outfitLoad: true,
    });
    const instance = wrapper.instance();
    const button = wrapper.find('#addToOutfitButton');

    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length);
    button.simulate('click');
    await tick();
    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length + 1);
  });

  it('should only add the same product once', async () => {
    wrapper.setState({
      related: dummy.relatedProducts,
      current: dummy.currentProduct,
      outfitList: dummy.relatedProducts,
      load: true,
      outfitLoad: true,
    });
    const instance = wrapper.instance();
    const button = wrapper.find('#addToOutfitButton');
    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length);
    button.simulate('click');
    await tick();
    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length + 1);
    button.simulate('click');
    await tick();
    expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length + 1);
  });

  it('outfit list card should have drop component', () => {
    wrapper.setState({
      related: dummy.relatedProducts,
      current: dummy.currentProduct,
      outfitList: dummy.relatedProducts,
      load: true,
      outfitLoad: true,
    });
    const instance = wrapper.instance();

    if (instance.state.outfitList.length > 0) {
      expect(wrapper.find('.actionIconDrop').exists()).toBe(true);
    } else {
      expect(wrapper.find('.actionIconDrop').exists()).toBe(false);
    }
  });

  it('should drop product after click on drop component', () => {
    wrapper.setState({
      related: dummy.relatedProducts,
      current: dummy.currentProduct,
      outfitList: dummy.relatedProducts,
      load: true,
      outfitLoad: true,
    });
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
      expect(instance.state.outfitList.length).toEqual(dummy.relatedProducts.length - 1);
      expect(check(id)).toBe(false);
    } else {
      expect(wrapper.find('.actionIconDrop').exists()).toBe(false);
    }
  });
});
