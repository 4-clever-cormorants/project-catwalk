import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';
import Category from './Category';
import Title from './Title';
import Description from './Description';
import Price from './Price';
import Shipping from './Shipping';

import css from './ProductInformation.css';

const ProductInformation = ({ product, rating }) => (
  <div className={css.productInformation}>
    <div className={css.info}>
      <Rating rating={rating} />
      <Category category={product.category} />
      <Title title={product.name} />
      <Price price={product.default_price} />
      <Shipping />
      <Description description={product.description} />
      {/* <Slogan slogan={product.slogan} /> */}
    </div>
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
  rating: PropTypes.number.isRequired,
};

export default ProductInformation;
