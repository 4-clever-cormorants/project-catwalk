/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.css';

const Thumbnail = ({
  id, url, onClick, defaultChecked,
}) => (
  <div
    className={css.thumbnail}
    id={url}
    onClick={onClick}
  >
    <label>
      <input type="radio" name="thumbnail" className="styleRadio" defaultChecked={defaultChecked} id={id} />
      <img src={url} alt="thumbnailimage" id={id} />
    </label>
  </div>
);

Thumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
};

Thumbnail.defaultProps = {
  defaultChecked: null,
};

export default Thumbnail;
