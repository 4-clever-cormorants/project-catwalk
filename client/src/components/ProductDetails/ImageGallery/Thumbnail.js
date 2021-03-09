/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.css';

const Thumbnail = ({
  thmbId, url, onClick, selected,
}) => {
  if (selected === 'selected') {
    return (
      <div
        className={css.thumbnail}
        id={url}
        onClick={onClick}
      >
        <img src={url} alt="thumbnailimage" id={thmbId} className={css.selected} />
      </div>
    );
  }
  return (
    <div
      className={css.thumbnail}
      id={url}
      onClick={onClick}
    >
      <img src={url} alt="thumbnailimage" id={thmbId} className={css.notSelected} />
    </div>
  );
};

Thumbnail.propTypes = {
  thmbId: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
};

export default Thumbnail;
