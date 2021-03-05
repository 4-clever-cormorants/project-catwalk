import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => (
  <div className="price">
    price: $
    {price}
  </div>
);

Price.propTypes = {
  price: PropTypes.string.isRequired,
};

export default Price;
