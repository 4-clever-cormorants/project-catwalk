import React from 'react';
import PropTypes from 'prop-types';

import css from "./ImageGallery.css";

const Thumbnail = ({ url, defaultChecked }) => (
  <div
    className={css.thumbnail}
    id={url}
    // onClick={() => {}}
  >
    <label>
      <input type="radio" name="thumbnail" className="styleRadio" defaultChecked={defaultChecked} />
      <img src={url} alt="thumbnailimage" />
    </label>
  </div>
);

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
};
export default Thumbnail;
