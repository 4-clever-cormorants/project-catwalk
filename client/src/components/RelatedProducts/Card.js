import React from 'react';
import propTypes from 'prop-types';
import Favor from './Favor';

const Card = ({ item, compareHandler }) => (
  // eslint-disable-next-line object-curly-spacing
  <div className="card" id={`card${item.id.toString()}`} onClick={compareHandler.bind(this, item)} onKeyPress={compareHandler.bind(this, item)} role="button" tabIndex={0}>
    <Favor />
    <img className="cardImg" src={item.thumbnail_url} alt={item.name} />
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
  compareHandler: propTypes.func.isRequired,
};

export default Card;
