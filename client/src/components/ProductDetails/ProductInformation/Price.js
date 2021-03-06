import React from 'react';
import PropTypes from 'prop-types';

import css from './ProductInformation.css';

const Price = ({ price }) => (
  <div className={css.price}>
    ${price}
  </div>
);

Price.propTypes = {
  price: PropTypes.string.isRequired,
};

export default Price;
