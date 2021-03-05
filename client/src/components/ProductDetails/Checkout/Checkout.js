import React from 'react';
import PropTypes from 'prop-types';

import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToCart from './AddToCart';
import Favorite from './Favorite';

import css from './Checkout.css';

const Checkout = ({
  style, addToCart, skuSelector, sku,
}) => {
  const { skus } = style;
  const qty = skus[sku].quantity;
  return (
    <div className={css.checkout}>
      <form onSubmit={addToCart} className={css.form}>
        <SizeSelector skus={skus} onChange={skuSelector} />
        <QtySelector qty={qty} />
        <AddToCart />
        <Favorite />
      </form>
    </div>
  );
};

Checkout.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  skuSelector: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  sku: PropTypes.string.isRequired,
};

export default Checkout;
