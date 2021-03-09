/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import css from './ProductInformation.css';

const Category = ({ category }) => (
  <div id="category" className={css.category}>
    {category.toUpperCase()}
  </div>
);

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
