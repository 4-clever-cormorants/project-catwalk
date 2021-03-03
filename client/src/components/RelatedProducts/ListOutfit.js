import React from 'react';
import propTypes from 'prop-types';
import CardOutfit from './CardOutfit';

const ListOutfit = ({ className, productsList, dropHandler }) => (
  <div className={className}>
    {productsList.map((item) => (
      <div key={item.id.toString()}>
        <CardOutfit item={item} dropHandler={dropHandler} />
      </div>

    ))}
  </div>
);

ListOutfit.propTypes = {
  className: propTypes.string.isRequired,
  productsList: propTypes.arrayOf(propTypes.object).isRequired,
  dropHandler: propTypes.func.isRequired,
};

export default ListOutfit;
