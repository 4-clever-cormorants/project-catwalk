import React from 'react';
import PropTypes from 'prop-types';

import css from './ProductInformation.css';

const Price = ({ originalPrice, salePrice }) => {
  if (salePrice !== null) {
    return (
      <div className={css.price}>
        <strike>
          ${originalPrice}
        </strike>
        <p>
          ${salePrice}
        </p>
      </div>
    );
  }
  return (
    <div className={css.price}>
      ${originalPrice}
    </div>
  );
};

Price.propTypes = {
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string.isRequired,
};

export default Price;
