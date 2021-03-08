import React from 'react';

import css from './Checkout.css';

const AddToCart = () => (
  <label className={css.addToCart}>
    <button type="submit" value="addToBag" className={css.addToCartButton}>
      <span className="fa fa-shopping-bag" />
      &nbsp;
      ADD TO BAG
    </button>
  </label>
);

export default AddToCart;
