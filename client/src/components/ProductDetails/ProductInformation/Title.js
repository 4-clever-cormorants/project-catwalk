import React from 'react';
import PropTypes from 'prop-types';

import css from './ProductInformation.css';

const Title = ({ title }) => (
  <div className={css.title}>
    {title}
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
