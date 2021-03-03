import React from 'react';
import propTypes from 'prop-types';
import Card from './Card';

const List = ({ className, productsList }) => (
  <div className={className}>
    {productsList.map((item) => (
      <div key={item.id.toString()}>
        <Card item={item} />
      </div>

    ))}
  </div>
);

List.propTypes = {
  className: propTypes.string.isRequired,
  productsList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default List;
