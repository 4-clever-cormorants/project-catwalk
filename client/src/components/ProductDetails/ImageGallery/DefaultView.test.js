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

  it('should intially have a right arrow', () => {
    const wrapper = mount(<DefaultView
      id={0}
      max={5}
      leftClick={() => {}}
      rightClick={() => {}}
      url="https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
    />);
    const rightArrow = wrapper.find('.fa-chevron-right');
    expect(rightArrow.exists()).toBe(true);
  });
});
