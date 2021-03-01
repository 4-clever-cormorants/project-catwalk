import React from 'react';
import PropTypes from 'prop-types';

import Category from './Category';
import Title from './Title';

const ProductInformation = ({ product }) => (
  <div className="productInformation">
    {console.log(product)}
    product information
    <Category category={product.category} />
    <Title title={product.name} />
  </div>
);

ProductInformation.propTypes = {
  product: PropTypes.objectOf().isRequired,
};

export default ProductInformation;
