import React from 'react';

import css from './Checkout.css';

const AddToCart = ({ onClick }) => {
  const widget = 'product detail';
  return (
    <label className={css.addToCart}>
      <button type="submit" value="addToBag" id="addToCart" className={css.addToCartButton} onClick={(e) => { onClick(e, widget); }}>
        <span className="fa fa-shopping-bag" />
        &nbsp;
        ADD TO BAG
      </button>
    </label>
  );
};

export default AddToCart;
