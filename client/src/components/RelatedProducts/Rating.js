import React from 'react';
import PropTypes from 'prop-types';

import css from './css/Rating.css';

const Rating = ({ rating, totalRatings, id }) => {
  let n = (Math.round(rating * 4) / 4).toFixed(2);
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (n >= 1) {
      stars.push({ value: 1, i });
      n -= 1;
    } else if (n > 0 && n < 1) {
      stars.push({ value: n, i });
      n = 0;
    } else if (n === 0) {
      stars.push({ value: 0, i });
    }
  }

  return (
    <div className={`rating ${css.rating}`}>
      {stars.map((star) => {
        if (star.value === 0) {
          return (
            <span key={`${id}R${star.i}`} className={`rating ${css.star} ${css.empty} fa fa-star`} />
          );
        }
        if (star.value === 0.25) {
          return (
            <span key={`${id}R${star.i}`} className={`rating ${css.star} ${css.quarter} fa fa-star`} />
          );
        }
        if (star.value === 0.50) {
          return (
            <span key={`${id}R${star.i}`} className={`rating ${css.star} ${css.half} fa fa-star`} />
          );
        }
        if (star.value === 0.75) {
          return (
            <span key={`${id}R${star.i}`} className={`rating ${css.star} ${css.threeQuarter} fa fa-star`} />
          );
        }
        if (star.value === 1) {
          return (
            <span key={`${id}R${star.i}`} className={`rating ${css.star} ${css.full} fa fa-star`} />
          );
        }
        return undefined;
      })}
      &nbsp;
      <span className={`totalRating ${css.totalRatings}`}>
        (
        {totalRatings}
        )
      </span>
    </div>
  );
};

Rating.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired,
};

export default Rating;
