import React from 'react';
import { mount } from 'enzyme';

import StyleSelector from './StyleSelector';
import StylesDisplay from './StylesDisplay';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToCart from './AddToCart';
import Favorite from './Favorite';

import styles from '../stylesDummyData';

test('StyleSelector should render all the subcomponents', () => {
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
  const wrapper = mount(<StyleSelector styles={styles.results} styleSelector={styleSelector} styleId="76285" style={styles.results[0]} />);
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
