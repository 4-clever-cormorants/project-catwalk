/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.css';

const Thumbnail = ({
  id, url, onClick,
}) => (
  <div
    className={css.thumbnail}
    id={url}
    onClick={onClick}
  >
    <img src={url} alt="thumbnailimage" id={id} />
  </div>
);

Thumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Thumbnail.defaultProps = {
  defaultChecked: null,
};

export default Thumbnail;
