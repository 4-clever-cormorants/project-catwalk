import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ style, styleSelector }) => (
  <div className="thumbnail" id={style.style_id} onClick={styleSelector} >
    <img src={style.photos[0].url} alt="thumbnailimage" className={style.style_id} />
  </div>
);

Thumbnail.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  styleSelector: PropTypes.func.isRequired,
};
export default Thumbnail;
