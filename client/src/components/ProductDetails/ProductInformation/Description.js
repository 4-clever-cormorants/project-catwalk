/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ description }) => (
  <div className="description">
    description: {description}
  </div>
);

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
