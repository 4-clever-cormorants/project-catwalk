import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';
import Category from './Category';
import Title from './Title';
import Description from './Description';
import Slogan from './Slogan';
import Price from './Price';

const ProductInformation = ({ product }) => (
  <div className="productInformation">
    <h2>product information</h2>
    <Rating rating={4.25} />
    <Category category={product.category} />
    <Title title={product.name} />
    <Description description={product.description} />
    <Slogan slogan={product.slogan} />
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
