import React from 'react';
import PropTypes from 'prop-types';

import StylesDisplay from './StylesDisplay';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToCart from './AddToCart';
import Favorite from './Favorite';

// refactor to hold the state of the selected style and
// then refactor the size selector and qty selector to reflect the options for that selected style

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    const { style, defaultSku } = this.props;
    this.state = {
      style,
      sku: defaultSku,
    };
    this.skuSelector = this.skuSelector.bind(this);
  }

  skuSelector(e) {
    this.setState({
      sku: e.target.value,
    });
  }

  render() {
    const { styles, style, styleSelector, defaultSku } = this.props;
    console.log('d-sku', defaultSku);
    console.log('sS/style: ', style);
    let { sku } = this.state;
    console.log('sku(size): ', sku);
    const { skus } = style;
    console.log('skus: ', skus);
    if (skus[sku] === undefined) {
      sku = defaultSku;
    }
    const qty = skus[sku].quantity;
    console.log('qty: ', qty);
    return (
      <div className="styleSelector">
        <h2>style selector</h2>
        <StylesDisplay styles={styles} onClick={styleSelector} />
        <SizeSelector skus={skus} onChange={this.skuSelector} />
        <QtySelector qty={qty} />
        <AddToCart />
        <Favorite />
      </div>
    );
  }
}

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    default: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
  styleSelector: PropTypes.func.isRequired,
  style: PropTypes.shape({
    style_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    default: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  defaultSku: PropTypes.string.isRequired,
};

export default StyleSelector;
