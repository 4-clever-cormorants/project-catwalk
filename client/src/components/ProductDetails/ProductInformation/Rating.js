import React from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating }) => (
  <div className="rating">
    rating: {rating}
  </div>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
