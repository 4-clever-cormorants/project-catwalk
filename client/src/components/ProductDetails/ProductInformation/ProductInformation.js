import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';
import Title from './Title';
import Price from './Price';

const ProductInformation = ({ product }) => (
  <div className="productInformation">
    <h2>product information</h2>
    <Category category={product.category} />
    <Title title={product.name} />
    <Price price={product.default_price} />
  </div>
);

ProductInformation.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    campus: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    default_price: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    updated_at: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default ProductInformation;
