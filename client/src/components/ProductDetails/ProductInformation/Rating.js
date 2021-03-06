/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

import css from './Rating.css';

const Rating = ({ rating, totalRatings }) => {
  let n = (Math.round(rating * 4) / 4).toFixed(2);
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (n >= 1) {
      stars.push(1);
      n -= 1;
    } else if (n > 0 && n < 1) {
      stars.push(n);
      n = 0;
    } else if (n === 0) {
      stars.push(0);
    }
  }

  return (
    <div className={css.rating}>
      {stars.map((star) => {
        if (star === 0) {
          return (
            <span className={`${css.star} ${css.empty} fa fa-star`} />
          );
        }
        if (star === 0.25) {
          return (
            <span className={`${css.star} ${css.quarter} fa fa-star`} />
          );
        }
        if (star === 0.50) {
          return (
            <span className={`${css.star} ${css.half} fa fa-star`} />
          );
        }
        if (star === 0.75) {
          return (
            <span className={`${css.star} ${css.threeQuarter} fa fa-star`} />
          );
        }
        if (star === 1) {
          return (
            <span className={`${css.star} ${css.full} fa fa-star`} />
          );
        }
      })}
      &nbsp;
      {totalRatings > 0
        ? (
          <div className={css.totalRatings}>
            ({totalRatings}) &nbsp;
            <span className={`${css.arrow} fa fa-angle-up`} />
          </div>
        )
        : ''}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
  totalRatings: PropTypes.number.isRequired,
};

Rating.defaultProps = {
  rating: null,
};

export default Rating;
