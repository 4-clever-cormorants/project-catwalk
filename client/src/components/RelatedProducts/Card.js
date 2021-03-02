import React from 'react';
import propTypes from 'prop-types';

const Card = ({ item }) => (
  <div className="card" id={item.id.toString()}>
    <h3>
      {item.name}
    </h3>
  </div>
);

Card.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  }).isRequired,
};

export default Card;
