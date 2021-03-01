import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
import ThumbnailView from './ThumbnailView';

class ImageGallery extends React.Component {
  constructor({ photos }) {
    super({ photos });
  }

  render() {
    return (
      <div className="imageGallery">
        image gallery
        <DefaultView />
        {this.photos.map((photo) => (
          <ThumbnailView thumbailUrl={photo.thumbail_url} />))}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf.objects.isRequired,
};

export default ImageGallery;
