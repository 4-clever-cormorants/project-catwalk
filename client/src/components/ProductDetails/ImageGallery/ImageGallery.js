import React from 'react';
// import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
// import ThumbnailView from './ThumbnailView';

const ImageGallery = () => (
  <div className="imageGallery">
    image gallery
    <DefaultView />
    {/* <DefaultView photo={this.photos[0].url} />
    {this.photos.map((photo) => (
      <ThumbnailView thumbnailUrl={photo.thumbail_url} />))} */}
  </div>
);

// ImageGallery.propTypes = {
//   photos: PropTypes.arrayOf.objects.isRequired,
// };

export default ImageGallery;
