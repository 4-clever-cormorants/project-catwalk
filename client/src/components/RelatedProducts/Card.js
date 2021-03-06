import React from 'react';
import propTypes from 'prop-types';
import Favor from './Favor';
import style from './css/card.css';

const Card = ({ item, compareHandler }) => (
  <div className={style.card} id={`card${item.id.toString()}`} onClick={compareHandler.bind(this, item)} onKeyPress={compareHandler.bind(this, item)} role="button" tabIndex={0}>
    <Favor />
    <img className={style.cardImg} src={item.thumbnail_url} alt={item.name} />
    <a className={style.cardName} href={`http://localhost:1128/?product_id=${item.id}`}>
      <h3>
        {item.name}
      </h3>
    </a>
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
