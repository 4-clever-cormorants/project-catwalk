/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category }) => (
  <div className="category">
    {category}
  </div>
);

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
