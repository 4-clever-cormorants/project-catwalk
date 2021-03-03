import React from 'react';
import { mount } from 'enzyme';

import StyleSelector from './StyleSelector';
import StylesDisplay from './StylesDisplay';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToCart from './AddToCart';
import Favorite from './Favorite';

test('StyleSelector should render all the subcomponents', () => {
  const styles = [
    {
      style_id: '76285',
      name: 'Teal',
      original_price: '398.00',
      sale_price: '254.00',
      default: true,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
      skus: {
        440865: {
          quantity: 33,
          size: 'XS',
        },
        440866: {
          quantity: 10,
          size: 'S',
        },
        440867: {
          quantity: 11,
          size: 'M',
        },
        440868: {
          quantity: 43,
          size: 'L',
        },
        440869: {
          quantity: 37,
          size: 'XL',
        },
        440870: {
          quantity: 0,
          size: 'XXL',
        },
      },
    },
    {
      style_id: '76286',
      name: 'Pink',
      original_price: '398.00',
      sale_price: null,
      default: false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1470434767159-ac7bf1b43351?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1525141741567-f89ef016dfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
      ],
      skus: {
        440871: {
          quantity: 47,
          size: 'XS',
        },
        440872: {
          quantity: 44,
          size: 'S',
        },
        440873: {
          quantity: 2,
          size: 'M',
        },
        440874: {
          quantity: 46,
          size: 'L',
        },
        440875: {
          quantity: 9,
          size: 'XL',
        },
        440876: {
          quantity: 50,
          size: 'XXL',
        },
      },
    },
  ];
  function styleSelector(e) {
    const styleId = e.target.classList[0];
    this.setState({
      styleId,
    });
    styles.results.forEach((style) => {
      if (style.style_id === styleId) {
        this.setState({
          style,
        });
      }
    });
  }
  const wrapper = mount(<StyleSelector styles={styles} styleSelector={styleSelector} styleId="76285" style={styles[0]} />);
  const sS = wrapper.find(StyleSelector);
  const stylesDisplay = wrapper.find(StylesDisplay);
  const sizeSelector = wrapper.find(SizeSelector);
  const qtySelector = wrapper.find(QtySelector);
  const addToCart = wrapper.find(AddToCart);
  const favorite = wrapper.find(Favorite);
  expect(sS.exists()).toBe(true);
  expect(stylesDisplay.exists()).toBe(true);
  expect(sizeSelector.exists()).toBe(true);
  expect(qtySelector.exists()).toBe(true);
  expect(addToCart.exists()).toBe(true);
  expect(favorite.exists()).toBe(true);
});
