/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Slogan = ({ slogan }) => (
  <div className="slogan">
    slogan: {slogan}
  </div>
);

Slogan.propTypes = {
  slogan: PropTypes.string.isRequired,
};

export default Slogan;
