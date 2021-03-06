import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
import Thumbnail from './Thumbnail';
import css from './ImageGallery.css';

const ImageGallery = ({ styleId, style, styles, styleSelector }) => (
  <div className={css.imageGallery} styleid={styleId}>
    <DefaultView url={style.photos[0].url} />
    <div className={css.thumbnailView}>
      <div className={css.thumbnails}>
        {styles.map((thumbnail) => (
          <div key={thumbnail.photos[0].url.toString()}>
            <Thumbnail style={thumbnail} styleSelector={styleSelector} />
          </div>
        ))}
      </div>
    </div>
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

export default ImageGallery;
