import React from 'react';

import css from './Checkout.css';

const AddToCart = ({ onMouseMove }) => (
  <div className={css.addToCart} id="addToCart" onMouseMove={onMouseMove}>
    <button type="submit" value="addToBag" className={css.addToCartButton}>
      <span className="fa fa-shopping-bag" />
      &nbsp;
      ADD TO BAG
    </button>
  </div>
);

export default AddToCart;
