import React from 'react';
import propTypes from 'prop-types';
import Drop from './Drop';
import style from './css/card.css';
import Rating from './Rating';
import Price from './Price';

const CardOutfit = ({ item, dropHandler }) => (
  <div className={style.card} id={`card${item.id.toString()}`}>
    <Drop id={item.id} dropHandler={dropHandler} />
    <div className={style.cardImgContainer}>
      <img className={style.cardImg} src={item.thumbnail_url} alt={item.name} />
    </div>
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
    <Price originalPrice={item.default_price} salePrice={item.sale_price} />
    <Rating rating={item.average_ratings} totalRatings={item.totalReviews} id={item.id} />
  </div>
);

CardOutfit.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    default_price: propTypes.string.isRequired,
    sale_price: propTypes.string,
    thumbnail_url: propTypes.string.isRequired,
    average_ratings: propTypes.number.isRequired,
    totalReviews: propTypes.number.isRequired,
  }).isRequired,
  dropHandler: propTypes.func.isRequired,
};

export default CardOutfit;
