/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.css';

const Thumbnail = ({ url, onClick, defaultChecked }) => (
  <div
    className={css.thumbnail}
    id={url}
    onClick={onClick}
  >
    <label>
      <input type="radio" name="thumbnail" className="styleRadio" defaultChecked={defaultChecked} id={url} />
      <img src={url} alt="thumbnailimage" />
    </label>
  </div>
);

Thumbnail.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
};

Thumbnail.defaultProps = {
  defaultChecked: null,
};

export default Thumbnail;
