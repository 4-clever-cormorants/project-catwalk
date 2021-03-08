import React from 'react';
import propTypes from 'prop-types';
import style from './css/actionIcon.css';

const Favor = ({
  id, wishList, addToWishHandler, dropWishHandler,
}) => {
  if (wishList.indexOf(id) === -1) {
    return (
      <div className={style.actionIconFavor} onClick={addToWishHandler.bind(this, id)} onKeyPress={addToWishHandler.bind(this, id)} role="button" tabIndex={0}>
        <i className={`${style.favor} far fa-star`} />
      </div>
    );
  }
  return (
    <div className={style.actionIconFavor} onClick={dropWishHandler.bind(this, id)} onKeyPress={dropWishHandler.bind(this, id)} role="button" tabIndex={0}>
      <i className={`${style.favor} fa fa-star`} />
    </div>
  );
};

Favor.propTypes = {
  id: propTypes.number.isRequired,
  wishList: propTypes.arrayOf(propTypes.number).isRequired,
  addToWishHandler: propTypes.func.isRequired,
  dropWishHandler: propTypes.func.isRequired,
};

export default Favor;
