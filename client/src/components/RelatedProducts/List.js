import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

const List = ({ className, productsList, compareHandler }) => (
  <div className={className}>
    {productsList.map((item) => (
      <div key={item.id.toString()}>
        <Card item={item} compareHandler={compareHandler} />
      </div>

    ))}
  </div>
);

List.propTypes = {
  className: propTypes.string.isRequired,
  compareHandler: propTypes.func.isRequired,
  productsList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default List;
