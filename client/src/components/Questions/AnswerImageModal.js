/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import style from './css/AnswerImageModal.css';

const AnswerImageModal = ({ url, exitModal, imageClicked }) => (
  <div className={`${style.modal} ${imageClicked ? style.modalShow : ''}`}>
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
    <div className={`${style.blocker} blocker`} onClick={exitModal} />
    <div className={`${style.imageModal} imageModal`}>
      <div className={`${style.imageContent} imageContent`}>
        <button className={`${style.exitButton}`} type="button" onClick={exitModal}>
          <div className={`${style.exitButtonDiv}`}>
            <i className="fa fa-times" aria-hidden="true" />
          </div>
        </button>
        <img alt="full sized answer" src={url} />
      </div>
    </div>
  </div>
);

AnswerImageModal.propTypes = {
  url: PropTypes.string.isRequired,
  exitModal: PropTypes.func.isRequired,
  imageClicked: PropTypes.bool,
};

AnswerImageModal.defaultProps = {
  imageClicked: false,
};

export default AnswerImageModal;
