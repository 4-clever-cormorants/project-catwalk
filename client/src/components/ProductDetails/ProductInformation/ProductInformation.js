import React from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';
import Category from './Category';
import Title from './Title';
import Description from './Description';
import Price from './Price';
import Shipping from './Shipping';
import Share from './Share';

import css from './ProductInformation.css';

const ProductInformation = ({
  product, originalPrice, salePrice, rating,
}) => (
  <div id="productInformationContainer" className={css.productInformation}>
    {console.log('PI', rating) }
    <div id="productInformation" className={css.info}>
      <Rating rating={rating} />
      <Category category={product.category} />
      <Title title={product.name} />
      <div className={css.flexRow}>
        <Price originalPrice={originalPrice} salePrice={salePrice} css={css} />
        &nbsp; &nbsp; &nbsp;
        <Shipping />
      </div>
      <Description description={product.description} />
      <Share />
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
  originalPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string,
  rating: PropTypes.object,
};

ProductInformation.defaultProps = {
  salePrice: null,
  rating: null,
};

export default ProductInformation;
