import React from 'react';
import propTypes from 'prop-types';

const Card = ({ item }) => (
  // eslint-disable-next-line object-curly-spacing
  <div className="card" id={item.id.toString()} style={{border: 'solid'}}>
    <img src={item.thumbnail_url} alt={item.name} />
    <h3 className="cardName">
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
    default_price: propTypes.string.isRequired,
    thumbnail_url: propTypes.string.isRequired,
  }).isRequired,
};

export default Card;
