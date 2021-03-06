import React from 'react';
// import axios from 'axios';
import { mount } from 'enzyme';

import ProductDetails from './ProductDetails';

import ImageGallery from './ImageGallery/ImageGallery';
import DefaultView from './ImageGallery/DefaultView';
import Thumbnail from './ImageGallery/Thumbnail';

import App from '../App';
import ProductInformation from './ProductInformation/ProductInformation';
import Rating from './ProductInformation/Rating';
import Category from './ProductInformation/Category';
import Title from './ProductInformation/Title';
import Price from './ProductInformation/Price';
import Shipping from './ProductInformation/Shipping';
import Description from './ProductInformation/Description';

import StyleSelector from './StyleSelector/StyleSelector';
import Style from './StyleSelector/Style';

import Checkout from './Checkout/Checkout';
import SizeSelector from './Checkout/SizeSelector';
import QtySelector from './Checkout/QtySelector';
import AddToCart from './Checkout/AddToCart';
import AddToWishList from './Checkout/AddToWishList';

import product from './productDummyData';
import styles from './stylesDummyData';

describe('test Product Details component', () => {
  const wrapper = mount(<ProductDetails productId={14034} />);
  wrapper.setState({
    product,
    styleId: styles.results[0].style_id,
    styles,
    style: styles.results[0],
    id: 0,
    cart: [],
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
    load: true,
  });
  wrapper.update();
  wrapper.instance();

  it('should exist', () => {
    const productDetails = wrapper.find(ProductDetails);
    expect(productDetails.exists()).toBe(true);
  });

  it('should have an image gallery that displays the selected style and thumbnails', () => {
    const imageGallery = wrapper.find(ImageGallery);
    const defaultView = wrapper.find(DefaultView);
    const thumbnail = wrapper.find(Thumbnail);
    expect(imageGallery.exists()).toBe(true);
    expect(defaultView.exists()).toBe(true);
    expect(thumbnail.exists()).toBe(true);
  });

  it('should have a product information section that describes the product', () => {
    const productInformation = wrapper.find(ProductInformation);
    const rating = wrapper.find(Rating);
    const category = wrapper.find(Category);
    const title = wrapper.find(Title);
    const price = wrapper.find(Price);
    const shipping = wrapper.find(Shipping);
    const description = wrapper.find(Description);
    expect(productInformation.exists()).toBe(true);
    expect(rating.exists()).toBe(true);
    expect(category.exists()).toBe(true);
    expect(title.exists()).toBe(true);
    expect(price.exists()).toBe(true);
    expect(shipping.exists()).toBe(true);
    expect(description.exists()).toBe(true);
  });

  it('should have a styles display which displays the different styles', () => {
    const styleSelector = wrapper.find(StyleSelector);
    const style = wrapper.find(Style);
    expect(styleSelector.exists()).toBe(true);
    expect(style.exists()).toBe(true);
  });

  it('should have a checkout component which includes selectors and buttons', () => {
    const checkout = wrapper.find(Checkout);
    const sizeSelector = wrapper.find(SizeSelector);
    const qtySelector = wrapper.find(QtySelector);
    const addToCart = wrapper.find(AddToCart);
    const addToWishList = wrapper.find(AddToWishList);
    expect(checkout.exists()).toBe(true);
    expect(sizeSelector.exists()).toBe(true);
    expect(qtySelector.exists()).toBe(true);
    expect(addToCart.exists()).toBe(true);
    expect(addToWishList.exists()).toBe(true);
  });
});
