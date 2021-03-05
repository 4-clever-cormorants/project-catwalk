import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

const List = ({ productsList, compareHandler }) => (
  <div className="relatedProductsList">
    {productsList.map((item) => (
      <div key={item.id.toString()}>
        <Card item={item} compareHandler={compareHandler} />
      </div>

    ))}
  </div>
);

List.propTypes = {
  compareHandler: propTypes.func.isRequired,
  productsList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default List;
