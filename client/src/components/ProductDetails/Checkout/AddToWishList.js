import React from 'react';

import css from './Checkout.css';

const AddToWishList = () => (
  <label id="addToWishList" className={css.addToWishList}>
    <button id="addToWishListButton" type="button" className={css.addToWishListButton}>
      <span className="fa fa-plus" />
      &nbsp;
      <u>Add to Wish List</u>
    </button>
  </label>
);

export default AddToWishList;
