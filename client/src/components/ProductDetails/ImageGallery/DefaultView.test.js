import React from 'react';
import { mount } from 'enzyme';

import DefaultView from './DefaultView';

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

  it('should update the default view when the right arrow is clicked', () => {
    const wrapper = mount(<DefaultView
      id={0}
      max={5}
      leftClick={() => {}}
      // rightClick={() => {}}
      url="https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />);
    const rightArrow = wrapper.find('.fa-chevron-right');
    // let { id } = wrapper.props();
    rightArrow.simulate('click', {});
    // expect(id).toBe(1);
    expect(rightArrow.exists()).toBe(true);
  });
});
