import React from 'react';
import { mount } from 'enzyme';

import StyleSelector from './StyleSelector';
import ProductDetails from '../ProductDetails';
import Style from './Style';
import product from '../productDummyData';
import styles from '../stylesDummyData';

import regeneratorRuntime from 'regenerator-runtime';

function tick() {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
}

describe('StyleSelector tests', () => {
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

  it('StyleSelector should render all the subcomponents', () => {
    const wrapper = mount(<StyleSelector
      styles={styles.results}
      selected={styles.results[0].name}
      styleSelector={styleSelector}
    />);
    const sS = wrapper.find(StyleSelector);
    const stylesDisplay = wrapper.find('.stylesDisplay');
    expect(sS.exists()).toBe(true);
    expect(stylesDisplay.exists()).toBe(true);
  });

  it('StylesSelector should render the styles of the given product', () => {
    const wrapper = mount(<StyleSelector
      styles={styles.results}
      selected={styles.results[0].name}
      styleSelector={styleSelector}
    />);
    const stylesDisplay = wrapper.find(StyleSelector);
    const len = wrapper.find('.row1').children().filter('.style').length;
    const style = wrapper.find(Style);
    expect(stylesDisplay.exists()).toBe(true);
    expect(len).toBeGreaterThan(3);
    expect(style.exists()).toBe(true);
  });

  it('should update the style in the state when you click on another style in the style display', async () => {
    const wrapper = mount(<ProductDetails productId={14034} />);
    wrapper.setState({
      product,
      rating: 5,
      styleId: styles.results[0].style_id,
      styles,
      style: styles.results[0],
      id: 0,
      load: true,
    });
    wrapper.update();
    const instance = wrapper.instance();
    const div = wrapper.find('#a70541');
    const styleInput = div.find('.styleRadio');
    expect(styleInput.exists()).toBe(true);
    styleInput.simulate('click', {});
    await tick();
    console.log(instance.state.style);
    expect(instance.state.style.style_id).toBe(70541);
  });
});
