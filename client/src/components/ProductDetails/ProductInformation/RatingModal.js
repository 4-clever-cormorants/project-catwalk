import React from 'react';
import PropTypes from 'prop-types';

import css from './RatingModal.css';

const RatingModal = ({
  total, data, clicked, exitModal,
}) => {
  const five = Math.floor((parseInt(data[5], 10) / total) * 100);
  const four = Math.floor((parseInt(data[4], 10) / total) * 100);
  const three = Math.floor((parseInt(data[3], 10) / total) * 100);
  const two = Math.floor((parseInt(data[2], 10) / total) * 100);
  const one = Math.floor((parseInt(data[1], 10) / total) * 100);
  return (
    <div id={css.ratingModal} className={`${css.modal} ${clicked ? css.modalShow : ''}`}>
      <div className={css.top}>
        <p className={css.summary}>Reviews Summary</p>
        <button type="button" onClick={exitModal} onKeyPress={exitModal}>X &nbsp; </button>
      </div>
      <div className={`${css.barDiv} five`}>
        <p className={css.stars}>5 stars</p>
        <progress id="fiveBar" value={five} max="100" className={css.bar} />
        <p className={css.percent}>
          {Number.isNaN(five) ? 0 : five}
          %
        </p>
      </div>
      <div className={`${css.barDiv} four`}>
        <p className={css.stars}>4 stars</p>
        <progress id="fourBar" value={four} max="100" className={css.bar} />
        <p className={css.percent}>
          {Number.isNaN(four) ? 0 : four}
          %
        </p>
      </div>
      <div className={`${css.barDiv} three`}>
        <p className={css.stars}>3 stars</p>
        <progress id="threeBar" value={three} max="100" className={css.bar} />
        <p className={css.percent}>
          {Number.isNaN(three) ? 0 : three}
          %
        </p>
      </div>
      <div className={`${css.barDiv} two`}>
        <p className={css.stars}>2 stars</p>
        <progress id="twoBar" value={two} max="100" className={css.bar} />
        <p className={css.percent}>
          {Number.isNaN(two) ? 0 : two}
          %
        </p>
      </div>
      <div className={`${css.barDiv} one`}>
        <p className={css.stars}>1 star</p>
        <progress id="oneBar" value={one} max="100" className={css.bar} />
        <p className={css.percent}>
          {Number.isNaN(one) ? 0 : one}
          %
        </p>
      </div>
    </div>
  );
};

RatingModal.propTypes = {
  total: PropTypes.number.isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  clicked: PropTypes.bool.isRequired,
  exitModal: PropTypes.func.isRequired,
};

export default RatingModal;
