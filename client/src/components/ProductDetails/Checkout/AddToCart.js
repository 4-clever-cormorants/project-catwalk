import React from 'react';

import css from './Checkout.css';

const AddToCart = ({ onMouseMove }) => (
  <label className={css.addToCart} id="addToCart" onMouseMove={onMouseMove}>
    <button type="submit" value="addToBag" id="addToCart" className={css.addToCartButton}>
      <span className="fa fa-shopping-bag" />
      &nbsp;
      ADD TO BAG
    </button>
  </label>
);

export default AddToCart;
