import React from 'react';
import { mount } from 'enzyme';

import StyleSelector from './StyleSelector';
import Style from './Style';
import styles from '../stylesDummyData';

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

  const wrapper = mount(<StyleSelector
    styles={styles.results}
    selected={styles.results[0].name}
    styleSelector={styleSelector}
  />);

  test('StyleSelector should render all the subcomponents', () => {
    const sS = wrapper.find(StyleSelector);
    const stylesDisplay = wrapper.find('.stylesDisplay');
    expect(sS.exists()).toBe(true);
    expect(stylesDisplay.exists()).toBe(true);
  });

  test('StylesSelector should render the styles of the given product', () => {
    const stylesDisplay = wrapper.find(StyleSelector);
    const len = wrapper.find('.row1').children().filter('.style').length;
    const style = wrapper.find(Style);
    expect(stylesDisplay.exists()).toBe(true);
    expect(len).toBeGreaterThan(1);
    expect(style.exists()).toBe(true);
  });
});
