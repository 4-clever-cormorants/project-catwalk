import React from 'react';
import { mount } from 'enzyme';

import ProductInformation from './ProductInformation';
import Category from './Category';
import Title from './Title';
import Price from './Price';

test('product information should render all the components', () => {
  const product = {
    id: 14931,
    campus: 'hr-sfo',
    name: 'Manuela Pants',
    slogan: 'Nemo ratione deserunt.',
    description: 'Rerum quia tempore aperiam reiciendis. Eum a enim. Saepe magni tenetur et. Sit est beatae.',
    category: 'Pants',
    default_price: '398.00',
    created_at: '2021-02-23T02:49:03.102Z',
    updated_at: '2021-02-23T02:49:03.102Z',
    features: [
      {
        feature: 'Non-GMO',
        value: null,
      },
      {
        feature: 'Material',
        value: '\'FullControl Skin\'',
      },
    ],
  };
  const wrapper = mount(<ProductInformation product={product} />);
  const productInformation = wrapper.find(ProductInformation);
  const category = wrapper.find(Category);
  const title = wrapper.find(Title);
  const price = wrapper.find(Price);
  expect(productInformation.exists()).toBe(true);
  expect(category.exists()).toBe(true);
  expect(title.exists()).toBe(true);
  expect(price.exists()).toBe(true);
});
