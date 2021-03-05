import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
import css from './ImageGallery.css';

const ImageGallery = ({ styleId, style }) => (
  <div className={css.imageGallery} styleid={styleId}>
    <DefaultView url={style.photos[0].url} />
  </div>
);

ImageGallery.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  styleId: PropTypes.number.isRequired,
};

export default ImageGallery;
