import React from 'react';
import { mount } from 'enzyme';

import ProductInformation from './ProductInformation';
import Rating from './Rating';
import Category from './Category';
import Title from './Title';
import Price from './Price';
import Shipping from './Shipping';
import Description from './Description';

import product from '../productDummyData';
import ratings from '../ratingsDummyData';

describe('testing the Product Information subcomponent', () => {
  const wrapper = mount(<ProductInformation
    product={product}
    originalPrice={product.default_price}
    salePrice={JSON.stringify(product.default_price * 0.25)}
    rating={{
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
    }}
  />);
  // wrapper.setProps({
  //   product,
  //   originalPrice: product.default_price,
  //   salePrice: (product.default_price) * 0.25,
  //   rating: ratings,
  // });
  wrapper.update();
  const productInformationLen = wrapper.find('.info').children().length;
  const rating = wrapper.find(Rating);
  const category = wrapper.find(Category);
  const title = wrapper.find(Title);
  const price = wrapper.find(Price);
  const shipping = wrapper.find(Shipping);
  const description = wrapper.find(Description);
  it('ProductInformation should display the rating, category, title, price, shipping, and description', () => {
    expect(productInformationLen).toBe(6);
    expect(rating.exists()).toBe(true);
    expect(category.exists()).toBe(true);
    expect(title.exists()).toBe(true);
    expect(price.exists()).toBe(true);
    expect(shipping.exists()).toBe(true);
    expect(description.exists()).toBe(true);
  });

  it('should provide the Ratings components with an average rating and total ratings', () => {
    // const instance = wrapper.instance();
    expect(rating.props().rating).toBe(3);
    expect(rating.props().totalRatings).toBe(25);
  });

  it('should have a price component that calculates the discount (if there is a sale price)', () => {
    const disc = price.find('.discount');
    expect(disc.exists()).toBe(true);
    console.log(disc.value);
    // const discount = Math.floor((1 - (salePrice / originalPrice)) * 100);
  });
});
