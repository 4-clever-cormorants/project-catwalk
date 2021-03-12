import React from 'react';
import { mount } from 'enzyme';

import regeneratorRuntime from 'regenerator-runtime';

import StyleSelector from './StyleSelector';
import ProductDetails from '../ProductDetails';
import Style from './Style';
import product from '../productDummyData';
import styles from '../stylesDummyData';

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

  it('StyleSelector should render all the subcomponents', async () => {
    const wrapper = mount(<StyleSelector
      styles={styles.results}
      selected={styles.results[0].name}
      styleSelector={styleSelector}
    />);
    await wrapper.instance();
    const sS = wrapper.find(StyleSelector);
    const stylesDisplay = wrapper.find('.stylesDisplay');
    expect(sS.exists()).toBe(true);
    expect(stylesDisplay.exists()).toBe(true);
    wrapper.unmount();
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
    wrapper.unmount();
  });

  it('should update the style in the state when you click on another style in the style display', async () => {
    const wrapper = mount(<ProductDetails productId={14034} getProductName={() => {}} />);
    const instance = wrapper.instance();
    wrapper.setState({
      product,
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
      styleId: styles.results[0].style_id,
      styles,
      style: styles.results[0],
      id: 0,
      load: true,
    });
    wrapper.update();
    expect(instance.state.styleId).toBe(70540);
    const div = wrapper.find('#a70541');
    const styleInput = div.find('img');
    expect(styleInput.exists()).toBe(true);
    styleInput.simulate('click');
    await tick();
    expect(instance.state.styleId).toBe(70541);
  });
});
