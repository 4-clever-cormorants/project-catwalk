import React from 'react';
import PropTypes from 'prop-types';
import style from './css/ImageModal.css';

const ImageModal = ({ url, exitModal }) => (
  <div className={style.modal}>
    <div className={style.blocker} onClick={exitModal} />
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

ImageModal.propTypes = {
  url: PropTypes.string.isRequired,
  exitModal: PropTypes.func.isRequired,
};

export default ImageModal;
