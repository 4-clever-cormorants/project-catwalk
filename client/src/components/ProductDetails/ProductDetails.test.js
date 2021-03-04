import React from 'react';
import { mount } from 'enzyme';

import ProductDetails from './ProductDetails';
import ImageGallery from './ImageGallery/ImageGallery';
import DefaultView from './ImageGallery/DefaultView';
import ThumbnailView from './ImageGallery/ThumbnailView';

import ProductInformation from './ProductInformation/ProductInformation';
import Category from './ProductInformation/Category';
import Title from './ProductInformation/Title';
import Price from './ProductInformation/Price';

import StyleSelector from './StyleSelector/StyleSelector';
import StylesDisplay from './StyleSelector/StylesDisplay';
import SizeSelector from './StyleSelector/SizeSelector';
import QtySelector from './StyleSelector/QtySelector';
import AddToCart from './StyleSelector/AddToCart';
import Favorite from './StyleSelector/Favorite';

it('should render all the subcomponents', () => {
  const wrapper = mount(<ProductDetails productId="14931" />);
  const productDetails = wrapper.find('.productDetails');
  const imageGallery = wrapper.find(ImageGallery);
  const defaultView = wrapper.find(DefaultView);
  const thumbnailView = wrapper.find(ThumbnailView);
  const productInformation = wrapper.find(ProductInformation);
  const category = wrapper.find(Category);
  const title = wrapper.find(Title);
  const price = wrapper.find(Price);
  const styleSelector = wrapper.find(StyleSelector);
  const stylesDisplay = wrapper.find(StylesDisplay);
  const sizeSelector = wrapper.find(SizeSelector);
  const qtySelecotr = wrapper.find(QtySelector);
  const addToCart = wrapper.find(AddToCart);
  const favorite = wrapper.find(Favorite);

  expect(productDetails.exists()).toBe(true);
  expect(imageGallery.exists()).toBe(true);
  expect(defaultView.exists()).toBe(true);
  expect(thumbnailView.exists()).toBe(true);
  expect(productInformation.exists()).toBe(true);
  expect(category.exists()).toBe(true);
  expect(title.exists()).toBe(true);
  expect(price.exists()).toBe(true);
  expect(styleSelector.exists()).toBe(true);
  expect(stylesDisplay.exists()).toBe(true);
  expect(sizeSelector.exists()).toBe(true);
  expect(qtySelecotr.exists()).toBe(true);
  expect(addToCart.exists()).toBe(true);
  expect(favorite.exists()).toBe(true);
});
