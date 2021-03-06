import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.css';

const DefaultView = ({ url }) => (
  <div className={css.defaultView}>
    <img src={url} alt="" />
  </div>
);

DefaultView.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DefaultView;
