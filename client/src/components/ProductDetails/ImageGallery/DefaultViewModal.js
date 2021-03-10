/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

import css from '../../Questions/css/AnswerImageModal.css';

const DefaultViewModal = ({ url, imageClicked, exitModal}) => (
  <div className={`${css.modal} ${imageClicked ? css.modalShow : ''}`}>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
    <div className={`${css.blocker} blocker`} onClick={exitModal} />
    <div className={`${css.imageModal} imageModal`}>
      <div className={`${css.imageContent} imageContent`}>
        <button className={`${css.exitButton}`} type="button" onClick={exitModal}>
          <div className={`${css.exitButtonDiv}`}>
            <i className="fa fa-times" aria-hidden="true" />
          </div>
        </button>
        <img alt="full sized default view" src={url} />
      </div>
    </div>
  </div>
);

DefaultViewModal.propTypes = {
  url: PropTypes.string.isRequired,
  imageClicked: PropTypes.bool.isRequired,
};

export default DefaultViewModal;
