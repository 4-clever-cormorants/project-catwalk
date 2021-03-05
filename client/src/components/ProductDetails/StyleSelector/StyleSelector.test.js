import React from 'react';
import { mount } from 'enzyme';

import StyleSelector from './StyleSelector';
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
  const wrapper = mount(<StyleSelector styles={styles.results} styleSelector={styleSelector} styleId="76285" style={styles.results[0]} defaultSku={Object.keys(styles.results[0].skus)[0]} />);
  const sS = wrapper.find(StyleSelector);
  const stylesDisplay = wrapper.find('.stylesDisplay');
  const sizeSelector = wrapper.find('.sizeSelector');
  const qtySelector = wrapper.find('.qtySelector');
  const addToCart = wrapper.find('.addToCart');
  const favorite = wrapper.find('.favorite');
  expect(sS.exists()).toBe(true);
  expect(stylesDisplay.exists()).toBe(true);
  expect(sizeSelector.exists()).toBe(true);
  expect(qtySelector.exists()).toBe(true);
  expect(addToCart.exists()).toBe(true);
  expect(favorite.exists()).toBe(true);
});

it('should add a selected sku to the cart only once per sku', () => {
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
  const wrapper = mount(<StyleSelector styles={styles.results} styleSelector={styleSelector} styleId="76285" style={styles.results[0]} defaultSku={Object.keys(styles.results[0].skus)[0]} />);
  const instance = wrapper.instance();
  const form = wrapper.find('.form');
  form.simulate('submit');
  expect(instance.state.cart.length).toBe(1);
  form.simulate('submit');
  expect(instance.state.cart.length).toBe(1);
});

// must test that the clicking on a style in the style selector updates
// the state of the ProductDetails component and is passed as a prop to
// the image gallery
