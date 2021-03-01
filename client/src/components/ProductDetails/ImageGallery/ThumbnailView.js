import React from 'react';

const ThumbnailView = (props) => (
  <div>
    a single thumbnail image
    {props.image}
  </div>
);

ThumbnailView.propTypes = {
  image: PropTypes.string,
};

export default ThumbnailView;
