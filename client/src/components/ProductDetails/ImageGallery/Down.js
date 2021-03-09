import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.css';

const Down = ({ scrollDown }) => (
  <i id="thumbnailscrollDown" className={`${css.scroll} fa fa-chevron-down`} onClick={scrollDown.bind(this)} onKeyPress={scrollDown.bind(this)} role="button" tabIndex={0} aria-label="Mute volume" />
);

Down.propTypes = {
  scrollDown: PropTypes.func.isRequired,
};

export default Down;
