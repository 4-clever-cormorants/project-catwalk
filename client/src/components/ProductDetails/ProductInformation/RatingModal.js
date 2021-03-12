import React from 'react';
import PropTypes from 'prop-types';

import css from './RatingModal.css';

class RatingModal extends React.Component {
  componentDidMount() {
    const { totalRatings, ratingsRaw } = this.props;
    const five = Math.floor((parseInt(ratingsRaw[5], 10) / totalRatings) * 100);
    const four = Math.floor((parseInt(ratingsRaw[4], 10) / totalRatings) * 100);
    const three = Math.floor((parseInt(ratingsRaw[3], 10) / totalRatings) * 100);
    const two = Math.floor((parseInt(ratingsRaw[2], 10) / totalRatings) * 100);
    const one = Math.floor((parseInt(ratingsRaw[1], 10) / totalRatings) * 100);
    document.getElementById('fiveBar').style['border-left'] = `${five * 1.2}px solid black`;
    document.getElementById('fiveBar').style.width = `${120 - (five * 1.2)}px`;
    document.getElementById('fourBar').style['border-left'] = `${four * 1.2}px solid black`;
    document.getElementById('fourBar').style.width = `${120 - (four * 1.2)}px`;
    document.getElementById('threeBar').style['border-left'] = `${three * 1.2}px solid black`;
    document.getElementById('threeBar').style.width = `${120 - (three * 1.2)}px`;
    document.getElementById('twoBar').style['border-left'] = `${two * 1.2}px solid black`;
    document.getElementById('twoBar').style.width = `${120 - (two * 1.2)}px`;
    document.getElementById('oneBar').style['border-left'] = `${one * 1.2}px solid black`;
    document.getElementById('oneBar').style.width = `${120 - (one * 1.2)}px`;
  }

  render() {
    const {
      totalRatings, ratingsRaw, clicked, exitModal,
    } = this.props;
    const five = Math.floor((parseInt(ratingsRaw[5], 10) / totalRatings) * 100);
    const four = Math.floor((parseInt(ratingsRaw[4], 10) / totalRatings) * 100);
    const three = Math.floor((parseInt(ratingsRaw[3], 10) / totalRatings) * 100);
    const two = Math.floor((parseInt(ratingsRaw[2], 10) / totalRatings) * 100);
    const one = Math.floor((parseInt(ratingsRaw[1], 10) / totalRatings) * 100);
    return (
      <div id={css.ratingModal} className={`${css.modal} ${clicked ? css.modalShow : ''}`}>
        <div className={css.top}>
          <p className={css.summary}>&nbsp; &nbsp; Reviews Summary</p>
          <button type="button" onClick={exitModal} onKeyPress={exitModal}>X &nbsp; </button>
        </div>
        <div className={`${css.barDiv} five`}>
          <p className={css.stars}>5 stars</p>
          <div id="fiveBar" className={css.bar} />
          <p className={css.percent}>
            {five}
            %
          </p>
        </div>
        <div className={`${css.barDiv} four`}>
          <p className={css.stars}>4 stars</p>
          <div id="fourBar" className={css.bar} />
          <p className={css.percent}>
            {four}
            %
          </p>
        </div>
        <div className={`${css.barDiv} three`}>
          <p className={css.stars}>3 stars</p>
          <div id="threeBar" className={css.bar} />
          <p className={css.percent}>
            {three}
            %
          </p>
        </div>
        <div className={`${css.barDiv} two`}>
          <p className={css.stars}>2 stars</p>
          <div id="twoBar" className={css.bar} />
          <p className={css.percent}>
            {two}
            %
          </p>
        </div>
        <div className={`${css.barDiv} one`}>
          <p className={css.stars}>1 star</p>
          <div id="oneBar" className={css.bar} />
          <p className={css.percent}>
            {one}
            %
          </p>
        </div>
      </div>
    );
  }
}

RatingModal.propTypes = {
  totalRatings: PropTypes.number.isRequired,
  ratingsRaw: PropTypes.objectOf(PropTypes.string).isRequired,
  clicked: PropTypes.bool.isRequired,
  exitModal: PropTypes.func.isRequired,
};

export default RatingModal;
