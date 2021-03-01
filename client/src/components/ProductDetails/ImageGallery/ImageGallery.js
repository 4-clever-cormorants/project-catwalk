import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
// import ThumbnailView from './ThumbnailView';

const ImageGallery = ({ photos }) => (
  <div className="imageGallery">
    image gallery
    <DefaultView url={photos[0].url} />
    {/* <DefaultView photo={this.photos[0].url} />
    {this.photos.map((photo) => (
      <ThumbnailView thumbnailUrl={photo.thumbail_url} />))} */}
  </div>
);

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
