import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ originalPrice, salePrice, css }) => {
  if (salePrice !== null) {
    const discount = Math.floor((1 - (salePrice / originalPrice)) * 100);
    return (
      <div id="price" className={css.price}>
        <div id="sale" className={css.sale}>
          <p id="salePrice" className={css.salePrice}>
            $
            {salePrice}
          </p>
          &nbsp; &nbsp;
          <strike>
            $
            {originalPrice}
          </strike>
          &nbsp; &nbsp;
          <p id="discount" className={css.discount}>
            {discount}
            % off
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={css.price}>
      $
      {originalPrice}
    </div>
  );
};

Price.propTypes = {
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string,
  css: PropTypes.objectOf(PropTypes.string).isRequired,
};

Price.defaultProps = {
  salePrice: null,
};

export default Price;
