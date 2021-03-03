import React from 'react';
import { mount } from 'enzyme';

import ProductDetails from './ProductDetails';
import ImageGallery from './ImageGallery/ImageGallery';
import ProductInformation from './ProductInformation/ProductInformation';
import StyleSelector from './StyleSelector/StyleSelector';

it('should render all the subcomponents', () => {
  const wrapper = mount(<ProductDetails productId="14931" />);
  const productDetails = wrapper.find('.productDetails');
  const imageGallery = wrapper.find(ImageGallery);
  const productInformation = wrapper.find(ProductInformation);
  const styleSelector = wrapper.find(StyleSelector);
  expect(productDetails.exists()).toBe(true);
  expect(imageGallery.exists()).toBe(true);
  expect(productInformation.exists()).toBe(true);
  expect(styleSelector.exists()).toBe(true);
});
