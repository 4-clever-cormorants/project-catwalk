import React from 'react';
import PropTypes from 'prop-types';

import StylesDisplay from './StylesDisplay';

import css from './StyleSelector.css';

const StyleSelector = ({
  styles, styleSelector,
}) => (
  <div className={css.styleSelector}>
    <StylesDisplay styles={styles} onClick={styleSelector} />
  </div>
);

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
  styleSelector: PropTypes.func.isRequired,
};

export default StyleSelector;
