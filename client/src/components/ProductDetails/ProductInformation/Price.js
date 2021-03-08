import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ originalPrice, salePrice, css }) => {
  if (salePrice !== null) {
    const discount = Math.floor((1 - (salePrice / originalPrice)) * 100);
    return (
      <div className={css.price}>
        <div className={css.sale}>
          <p className={css.salePrice}>
            $
            {salePrice}
          </p>
          &nbsp; &nbsp;
          <strike>
            $
            {originalPrice}
          </strike>
          &nbsp; &nbsp;
          <p className={css.discount}>
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
