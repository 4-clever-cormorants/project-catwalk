import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
import ThumbnailView from './ThumbnailView';

const ImageGallery = ({ photos }) => (
  <div className="imageGallery">
    image gallery
    <DefaultView url={photos[0].url} />
    {photos.map((photo) => (
      <div key={photo.thumbnail_url.toString()}>
        <ThumbnailView thumbnailUrl={photo.thumbnail_url} />
      </div>
    ))}
  </div>
);

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
