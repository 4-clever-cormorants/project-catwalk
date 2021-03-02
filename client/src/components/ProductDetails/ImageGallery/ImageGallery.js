import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
import ThumbnailView from './ThumbnailView';

const ImageGallery = ({ styleId, style }) => (
  <div className="imageGallery" styleid={styleId}>
    <h2>image gallery</h2>
    <DefaultView url={style.photos[0].url} />
    {style.photos.map((photo) => (
      <div className="thumbnailView" key={photo.thumbnail_url.toString()}>
        <ThumbnailView thumbnailUrl={photo.thumbnail_url} />
      </div>
    ))}
  </div>
);

ImageGallery.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    default: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  styleId: PropTypes.string.isRequired,
};

export default ImageGallery;