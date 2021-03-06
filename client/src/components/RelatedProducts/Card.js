import React from 'react';
import propTypes from 'prop-types';
import Favor from './Favor';
import style from './css/card.css';
import Rating from './Rating';

const Card = ({ item, compareHandler }) => (
  <div className={style.card} id={`card${item.id.toString()}`} onClick={compareHandler.bind(this, item)} onKeyPress={compareHandler.bind(this, item)} role="button" tabIndex={0}>
    <Favor />
    <img className={style.cardImg} src={item.thumbnail_url} alt={item.name} />
    <a
      className={style.cardName}
      href={`http://localhost:1128/?product_id=${item.id}`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h3>
        {item.name}
      </h3>
    </a>
    <h5>
      {item.default_price}
    </h5>
    <Rating rating={item.average_ratings} totalRatings={item.totalReviews} id={item.id} />
  </div>
);

Card.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    default_price: propTypes.string.isRequired,
    thumbnail_url: propTypes.string.isRequired,
    average_ratings: propTypes.number.isRequired,
    totalReviews: propTypes.number.isRequired,
  }).isRequired,
  compareHandler: propTypes.func.isRequired,
};

export default Card;
