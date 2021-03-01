import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category }) => (
  <div>
    category:
    {category}
  </div>
);

Category.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Category;
