import React from 'react';
import PropTypes from 'prop-types';

import css from './RatingModal.css';


class RatingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

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
    const { totalRatings, ratingsRaw } = this.props;
    const five = Math.floor((parseInt(ratingsRaw[5], 10) / totalRatings) * 100);
    const four = Math.floor((parseInt(ratingsRaw[4], 10) / totalRatings) * 100);
    const three = Math.floor((parseInt(ratingsRaw[3], 10) / totalRatings) * 100);
    const two = Math.floor((parseInt(ratingsRaw[2], 10) / totalRatings) * 100);
    const one = Math.floor((parseInt(ratingsRaw[1], 10) / totalRatings) * 100);
    console.log(one, two, three, four, five);
    return (
      <div className={css.ratingModal}>
        <div className={`${css.barDiv} five`}>
          5 stars
          <div id="fiveBar" className={css.bar} />
          {five}
          %
        </div>
        <div className={`${css.barDiv} four`}>
          4 stars
          <div id="fourBar" className={css.bar} />
          {four}
          %
        </div>
        <div className={`${css.barDiv} three`}>
          3 stars
          <div id="threeBar" className={css.bar} />
          {three}
          %
        </div>
        <div className={`${css.barDiv} two`}>
          2 stars
          <div id="twoBar" className={css.bar} />
          {two}
          %
        </div>
        <div className={`${css.barDiv} one`}>
          1 star
          <div id="oneBar" className={css.bar} />
          {one}
          %
        </div>
      </div>
    );
  }
}

export default RatingModal;
