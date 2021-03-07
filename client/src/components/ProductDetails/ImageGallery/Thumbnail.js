import React from 'react';
import PropTypes from 'prop-types';

const Thumbnail = ({ url }) => (
  <div className="thumbnail" id={url}>
    <label>
      <input type="radio" name="thumbnail" className="styleRadio" />
      <img src={url} alt="thumbnailimage" />
    </label>
  </div>
);

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
};
export default Thumbnail;
