import React from 'react';
import PropTypes from 'prop-types';

import StylesDisplay from './StylesDisplay';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToCart from './AddToCart';
import Favorite from './Favorite';

const StyleSelector = ({
  styles, style, styleSelector, skuSelector, addToCart, sku,
}) => {
  const { skus } = style;
  const qty = skus[sku].quantity;
  return (
    <div className="styleSelector">
      <StylesDisplay styles={styles} onClick={styleSelector} />
      <div className="checkout">
        <form onSubmit={addToCart} className="form">
          <SizeSelector skus={skus} onChange={skuSelector} />
          <QtySelector qty={qty} />
          <AddToCart />
          <Favorite />
        </form>
      </div>
    </div>
  );
};

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
  styleSelector: PropTypes.func.isRequired,
  skuSelector: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  style: PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  sku: PropTypes.string.isRequired,
};

export default StyleSelector;
