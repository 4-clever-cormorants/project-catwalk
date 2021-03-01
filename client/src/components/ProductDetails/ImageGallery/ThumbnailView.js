import React from 'react';
import PropTypes from 'prop-types';

const ThumbnailView = ({ thumbnailUrl }) => (
  <div>
    a single thumbnail image
    {console.log(thumbnailUrl)}
    <img src={thumbnailUrl} alt="thumbnailimage" />
  </div>
);

ThumbnailView.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
};

export default ThumbnailView;
