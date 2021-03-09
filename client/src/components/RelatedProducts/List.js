import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';
import style from './css/list.css';

const List = ({
  productsList,
  wishList,
  compareHandler,
  addToWishHandler,
  dropWishHandler,
  scrollHandler,
}) => (
  <div className={`${style.relatedProductsList} relatedList`} onScroll={scrollHandler.bind(this, 'relatedList')}>
    {productsList.map((item) => (
      <div key={item.id.toString()}>
        <Card
          item={item}
          wishList={wishList}
          compareHandler={compareHandler}
          addToWishHandler={addToWishHandler}
          dropWishHandler={dropWishHandler}
        />
      </div>
    ))}
  </div>
);

List.propTypes = {
  wishList: propTypes.arrayOf(propTypes.number).isRequired,
  compareHandler: propTypes.func.isRequired,
  addToWishHandler: propTypes.func.isRequired,
  dropWishHandler: propTypes.func.isRequired,
  productsList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default List;
