import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
import ThumbnailView from './ThumbnailView';

const ImageGallery = ({ photos, styleId }) => (
  <div className="imageGallery" styleId={styleId}>
    image gallery
    <DefaultView url={photos[0].url} />
    {photos.map((photo) => (
      <div className="thumbnailView" key={photo.thumbnail_url.toString()}>
        <ThumbnailView thumbnailUrl={photo.thumbnail_url} />
      </div>
    ))}
  </div>
);

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  styleId: PropTypes.string.isRequired,
};

export default ImageGallery;
