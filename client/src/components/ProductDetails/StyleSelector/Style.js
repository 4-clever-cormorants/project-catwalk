import React from 'react';
import PropTypes from 'prop-types';

const Style = ({ style }) => (
  <div className="style">
    style
    <img src={style.photos[0].thumbnail_url} alt="" />
  </div>
);

Style.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    default: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Style;
