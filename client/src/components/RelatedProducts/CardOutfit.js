import React from 'react';
import propTypes from 'prop-types';
import Drop from './Drop';
import style from './css/card.css';
import Rating from './Rating';
import Price from '../ProductDetails/ProductInformation/Price';
import priceCss from './css/price.css';

const CardOutfit = ({ item, dropHandler }) => {
  let image;
  if (item.thumbnail_url) {
    image = (
      <div className={`cardImgContainer ${style.cardImgContainer}`}>
        <img className={`cardImg ${style.cardImg}`} src={item.thumbnail_url} alt={item.name} draggable="false" loading="lazy" />
      </div>
    );
  } else {
    image = (
      <div className={`cardImgLostContainer ${style.cardImgLostContainer}`}>
        <div className={`cardImgLost ${style.cardImgLost}`}>Sorry Photo lost</div>
      </div>
    );
  }
  return (
    <div className={`${style.card} ${style.outfitcards}`} id={`outfitcard${item.id}`}>
      <Drop id={item.id} dropHandler={dropHandler} />
      {image}
      <a
        className={`cardName ${style.cardName}`}
        href={`/?product_id=${item.id}`}
        draggable="false"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3>
          {item.name}
        </h3>
      </a>
      <Price originalPrice={item.default_price} salePrice={item.sale_price} css={priceCss} />
      <Rating rating={item.average_ratings} totalRatings={item.totalReviews} id={item.id} />
    </div>
  );
};

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
