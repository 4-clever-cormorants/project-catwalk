import React from 'react';
import propTypes from 'prop-types';

const Card = ({ item }) => (
  // eslint-disable-next-line object-curly-spacing
  <div className="card" id={item.id.toString()} style={{border: 'solid'}}>
    <h3>
      {item.name}
    </h3>
    <h5>
      {item.default_price}
    </h5>
  </div>
);

Card.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
  }).isRequired,
};

export default Card;
