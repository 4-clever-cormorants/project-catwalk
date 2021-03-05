/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => {
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
    <div className="rating">
      {stars.map((star) => {
        if (star === 0) {
          return (
            <span className="star empty fa fa-star" />
          );
        }
        if (star === 0.25) {
          return (
            <span className="star quarter fa fa-star" />
          );
        }
        if (star === 0.50) {
          return (
            <span className="star half fa fa-star" />
          );
        }
        if (star === 0.75) {
          return (
            <span className="star three-quarter fa fa-star" />
          );
        }
        if (star === 1) {
          return (
            <span className="star full fa fa-star" />
          );
        }
      })}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
