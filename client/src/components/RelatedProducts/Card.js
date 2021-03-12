import React from 'react';
import propTypes from 'prop-types';
import Favor from './Favor';
import style from './css/card.css';
import Rating from './Rating';
import Price from '../ProductDetails/ProductInformation/Price';
import priceCss from './css/price.css';

const Card = ({
  item,
  wishList,
  compareHandler,
  addToWishHandler,
  dropWishHandler,
}) => (
  <div
    className={style.card}
    draggable="true"
    id={`card${item.id}`}
    onClick={compareHandler.bind(this, item)}
    onKeyPress={compareHandler.bind(this, item)}
    role="button"
    tabIndex={0}
  >
    <Favor
      id={item.id}
      wishList={wishList}
      addToWishHandler={addToWishHandler}
      dropWishHandler={dropWishHandler}
    />
    <div className={`cardImgContainer ${style.cardImgContainer}`}>
      <img className={`cardImg ${style.cardImg}`} src={item.thumbnail_url} alt={item.name} draggable="false" />
    </div>
    <a
      className={`cardName ${style.cardName}`}
      href={`/?product_id=${item.id}`}
      draggable="false"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <h3>{item.name}</h3>
    </a>
    <Price
      originalPrice={item.default_price}
      salePrice={item.sale_price}
      css={priceCss}
    />
    <Rating
      rating={item.average_ratings}
      totalRatings={item.totalReviews}
      id={item.id}
    />
  </div>
);

Card.propTypes = {
  item: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    default_price: propTypes.string.isRequired,
    sale_price: propTypes.string,
    thumbnail_url: propTypes.string.isRequired,
    average_ratings: propTypes.number.isRequired,
    totalReviews: propTypes.number.isRequired,
  }).isRequired,
  wishList: propTypes.arrayOf(propTypes.number).isRequired,
  compareHandler: propTypes.func.isRequired,
  addToWishHandler: propTypes.func.isRequired,
  dropWishHandler: propTypes.func.isRequired,
};

export default Card;
