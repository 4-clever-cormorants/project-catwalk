import React from 'react';
import PropTypes from 'prop-types';

import StylesDisplay from './StylesDisplay';
import SizeSelector from './SizeSelector';

// refactor to hold the state of the selected style and
// then refactor the size selector and qty selector to reflect the options for that selected style

const StyleSelector = ({ styles }) => (
  <div className="styleSelector">
    style selector
    <StylesDisplay />
    <SizeSelector />
  </div>
);

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string.isRequired,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
};

export default StyleSelector;
