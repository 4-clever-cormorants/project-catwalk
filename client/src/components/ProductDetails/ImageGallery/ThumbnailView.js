import React from 'react';
import PropTypes from 'prop-types';

const ThumbnailView = ({ thumbnailUrl }) => (
  <div className="thumbnailView">
    a single thumbnail image
    <img src={thumbnailUrl} alt="thumbnailimage" />
  </div>
);

ThumbnailView.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
};

export default ThumbnailView;
