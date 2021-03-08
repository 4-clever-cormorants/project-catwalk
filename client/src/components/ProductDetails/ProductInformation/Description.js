/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import css from './ProductInformation.css';

const Description = ({ description }) => (
  <div className={css.description}>
    {description}
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
