import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGallery.css';

const DefaultView = ({ id, max, leftClick, rightClick, url }) => (
  <div className={css.DV}>
    <div className={css.left}>
      {id > 0 ? (
        <span onClick={leftClick} className="fa fa-chevron-left" />
      ) : ''}
    </div>
    <div className={css.defaultView}>
      <img src={url} alt="" />
    </div>
    <div className={css.right}>
      {id < max - 1 ? (
        <span onClick={rightClick} className="fa fa-chevron-right" />
      ) : ''}
    </div>
  </div>
);

DefaultView.propTypes = {
  id: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  leftClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default DefaultView;
