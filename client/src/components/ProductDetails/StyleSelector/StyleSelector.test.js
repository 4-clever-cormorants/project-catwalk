import React from 'react';
import { mount } from 'enzyme';

import StyleSelector from './StyleSelector';
import Style from './Style';
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
  expect(sS.exists()).toBe(true);
  expect(stylesDisplay.exists()).toBe(true);
});

// it('should add a selected sku to the cart only once per sku', () => {
//   function styleSelector(e) {
//     const styleId = e.target.classList[0];
//     this.setState({
//       styleId,
//     });
//     styles.results.forEach((style) => {
//       if (style.style_id === styleId) {
//         this.setState({
//           style,
//         });
//       }
//     });
//   }
//   const wrapper = mount(<StyleSelector styles={styles.results} styleSelector={styleSelector} styleId="76285" style={styles.results[0]} defaultSku={Object.keys(styles.results[0].skus)[0]} />);
//   const instance = wrapper.instance();
//   const form = wrapper.find('.form');
//   form.simulate('submit');
//   expect(instance.state.cart.length).toBe(1);
//   form.simulate('submit');
//   expect(instance.state.cart.length).toBe(1);
// });

test('StylesSelector should render the styles of the given product', () => {
  const wrapper = mount(<StyleSelector styles={styles.results} styleSelector={() => {}} />);
  const stylesDisplay = wrapper.find(StyleSelector);
  const len = wrapper.find('.row1').children().filter('.style').length;
  const style = wrapper.find(Style);
  expect(stylesDisplay.exists()).toBe(true);
  expect(len).toBeGreaterThan(1);
  expect(style.exists()).toBe(true);
});
