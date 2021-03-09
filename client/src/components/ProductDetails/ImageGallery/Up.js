import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.css';

const Up = ({ scrollUp }) => (
  <i className={`${css.scroll} fa fa-chevron-up`} onClick={scrollUp.bind(this)} onKeyPress={scrollUp.bind(this)} role="button" tabIndex={0} aria-label="Mute volume" />
);

Up.propTypes = {
  scrollUp: PropTypes.func.isRequired,
};

export default Up;
