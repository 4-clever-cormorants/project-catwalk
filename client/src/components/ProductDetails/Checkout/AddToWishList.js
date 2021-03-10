import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import css from './Checkout.css';

const AddToWishList = ({ productId }) => {
  const [added, add] = React.useState(false);

  const addToWishList = (id) => {
    axios.post(`/wishList/add?product_id=${id}`)
      .then((res) => {
        console.log(res);
        add(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <label id="addToWishList" className={css.addToWishList}>
      <button id="addToWishListButton" type="button" className={css.addToWishListButton} onClick={(e) => { addToWishList(e.target.id); }}>
        {added ? (
          <div className="added">
            <span className="fa fa-check" />
            &nbsp;
            <u id={productId}>Added to Wish List</u>
          </div>
        ) : (
          <div className={css.add}>
            <span className="fa fa-plus" />
            &nbsp;
            <u id={productId}>Add to Wish List</u>
          </div>
        )}
      </button>
    </label>
  );
};

AddToWishList.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default AddToWishList;
