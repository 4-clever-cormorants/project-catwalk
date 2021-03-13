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
        onClick={onClick}
        onKeyPress={onClick}
        tabIndex={0}
        role="button"
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
      onKeyPress={onClick}
      tabIndex={0}
      role="button"
    >
      <img src={url} alt="thumbnailimage" id={thmbId} className={css.notSelected} loading="lazy" />
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
