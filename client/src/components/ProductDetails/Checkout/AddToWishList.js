import React from 'react';

import css from './Checkout.css';

const AddToWishList = () => (
  <label className={css.addToWishList}>
    <button type="button" className={css.addToWishListButton}>
      <span className="fa fa-plus" />
      &nbsp;
      <u>Add to Wish List</u>
    </button>
  </label>
);

export default AddToWishList;
