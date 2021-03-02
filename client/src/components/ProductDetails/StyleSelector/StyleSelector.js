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
  constructor({
    styles, styleId, styleSelector, style,
  }) {
    super({
      styles, styleId, styleSelector, style,
    });
    this.state = {
      style,
      sku: '440865',
    };
    this.skuSelector = this.skuSelector.bind(this);
  }

  skuSelector(e) {
    this.setState({
      sku: e.target.value,
    });
  }

  render() {
    const { styles, styleSelector } = this.props;
    const { style, sku } = this.state;
    const { skus } = style;
    const qty = skus[sku].quantity;
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
  styleId: PropTypes.string.isRequired,
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
};

export default StyleSelector;