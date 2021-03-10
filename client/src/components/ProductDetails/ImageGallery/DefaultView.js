/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import DefaultViewModal from './DefaultViewModal';

import css from './ImageGallery.css';

const DefaultView = ({
  id, max, leftClick, rightClick, url,
}) => {
  const [imageClicked, clickImage] = React.useState(false);
  function exitModal() {
    clickImage(false);
  }
  return (
    <div id="defaultView" className={css.DV}>
      <div id="scrollLeft" className={css.left}>
        {id > 0 ? (
          <button id="defaultViewLeftButton" type="button" onClick={leftClick} onKeyPress={leftClick} className="fa fa-chevron-left" />
        ) : ''}
      </div>
      <div id={url} className={css.defaultView} onClick={() => { clickImage(true); }}>
        <img id="defaultImage" src={url} alt="" />
      </div>
      <div className={css.right}>
        {id < max - 1 ? (
          <button id="defaultViewRightButton" type="button" onClick={rightClick} onKeyPress={rightClick} className="fa fa-chevron-right" />
        ) : ''}
      </div>
      <DefaultViewModal url={url} imageClicked={imageClicked} exitModal={exitModal} />
    </div>
  );
};

DefaultView.propTypes = {
  id: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  leftClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default DefaultView;
