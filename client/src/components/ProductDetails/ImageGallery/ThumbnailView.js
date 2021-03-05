import React from 'react';
import PropTypes from 'prop-types';

const ThumbnailView = ({ url }) => (
  <div className="thumbnail">
    <img src={url} alt="thumbnailimage" />
  </div>
);

ThumbnailView.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ThumbnailView;
