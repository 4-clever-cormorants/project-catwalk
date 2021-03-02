import React from 'react';
import PropTypes from 'prop-types';

import Style from './Style';

const StylesDisplay = ({ styles, onClick }) => (
  <div className="StylesDisplay">
    styles: selected style
    {styles.map((style) => (
      <div key={style.style_id} >
        <Style style={style} onClick={onClick} />
      </div>
    ))}
  </div>
);

StylesDisplay.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    default: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StylesDisplay;
