import React from 'react';
import PropTypes from 'prop-types';

const Style = ({ style, onClick }) => (
  <div className={style.style_id} id={style.style_id} onClick={onClick}>
    style
    <img src={style.photos[0].thumbnail_url} alt="" className={style.style_id} />
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
