import React from 'react';
import PropTypes from 'prop-types';

const ThumbnailView = ({ imageUrl }) => (
  <div>
    a single thumbnail image
    <img src={imageUrl} alt="thumbnailimage" />
  </div>
);

ThumbnailView.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ThumbnailView;
