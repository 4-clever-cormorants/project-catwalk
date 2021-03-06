import React from 'react';
import propTypes from 'prop-types';
import Drop from './Drop';
import style from './css/card.css';
import Rating from './Rating';

const CardOutfit = ({ item, dropHandler }) => (
  <div className={style.card} id={`card${item.id.toString()}`}>
    <Drop id={item.id} dropHandler={dropHandler} />
    <img className={style.cardImg} src={item.thumbnail_url} alt={item.name} />
    <a className={style.cardName} href={`http://localhost:1128/?product_id=${item.id}`}>
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

CardOutfit.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    default_price: propTypes.string.isRequired,
    thumbnail_url: propTypes.string.isRequired,
    average_ratings: propTypes.number.isRequired,
    totalReviews: propTypes.number.isRequired,
  }).isRequired,
  dropHandler: propTypes.func.isRequired,
};

export default CardOutfit;
