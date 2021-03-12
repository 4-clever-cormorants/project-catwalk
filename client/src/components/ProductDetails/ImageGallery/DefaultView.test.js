import React from 'react';
import axios from 'axios';

import { mount } from 'enzyme';

import DefaultView from './DefaultView';
import ProductDetails from '../ProductDetails';

import product from '../productDummyData';
import styles from '../stylesDummyData';

jest.mock('axios');

axios.get.mockImplementation((url) => {
  if (url === `/products/data?product_id=${product.id}`) {
    return Promise.resolve({ data: [product] });
  }
  if (url === `/products/styles?product_id=${product.id}`) {
    return Promise.resolve({ data: [styles] });
  }
  if (url === `/rating/data?product_id=${product.id}`) {
    return Promise.resolve({ data: [5] });
  }
  return undefined;
});

describe('testing the default view of the image gallery', () => {
  it('should render the first image in the style object photos array', () => {
    const url = 'https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80';
    const wrapper = mount(<DefaultView url={url} />);
    const defaultView = wrapper.find(DefaultView);
    expect(defaultView.exists()).toBe(true);
  });

  it('should intially render a right arrow and not a left arrow', () => {
    const wrapper = mount(<DefaultView
      id={0}
      max={5}
      leftClick={() => {}}
      rightClick={() => {}}
      url="https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />);
    const rightArrow = wrapper.find('.fa-chevron-right');
    const leftArrow = wrapper.find('.fa-chevron-left');
    expect(rightArrow.exists()).toBe(true);
    expect(leftArrow.exists()).toBe(false);
  });

  it('should render both a left and a right arrow when the index is greater than zero', () => {
    const wrapper = mount(<DefaultView
      id={1}
      max={5}
      leftClick={() => {}}
      rightClick={() => {}}
      url="https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />);
    const rightArrow = wrapper.find('.fa-chevron-right');
    const leftArrow = wrapper.find('.fa-chevron-left');
    expect(rightArrow.exists()).toBe(true);
    expect(leftArrow.exists()).toBe(true);
  });

  it('should not render a left arrow and not a right arrow when the index is one less than max', () => {
    const wrapper = mount(<DefaultView
      id={4}
      max={5}
      leftClick={() => {}}
      rightClick={() => {}}
      url="https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />);
    const rightArrow = wrapper.find('.fa-chevron-right');
    const leftArrow = wrapper.find('.fa-chevron-left');
    expect(rightArrow.exists()).toBe(false);
    expect(leftArrow.exists()).toBe(true);
  });

  it('should update the id when the right arrow is clicked', () => {
    const wrapper = mount(<ProductDetails
      productId={14034}
    />);
    const instance = wrapper.instance();
    wrapper.setState({
      product,
      rating: {
        average: 3.12,
        ratings: 125,
        raw: {
          0: '1',
          1: '22',
          2: '16',
          3: '37',
          4: '25',
          5: '25',
        },
      },
      styleId: styles.results[0].style_id,
      styles,
      style: styles.results[0],
      id: 0,
      load: true,
    });
    wrapper.update();
    expect(instance.state.id).toBe(0);
    const rightArrow = wrapper.find('.fa-chevron-right');
    rightArrow.simulate('click');
    expect(instance.state.id).toBe(1);
  });
});
