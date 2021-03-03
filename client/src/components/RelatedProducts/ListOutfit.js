import React from 'react';
import propTypes from 'prop-types';
import CardOutfit from './CardOutfit';

const ListOutfit = ({ className, productsList }) => (
  <div className={className}>
    {productsList.map((item) => (
      <div key={item.id.toString()}>
        <CardOutfit item={item} />
      </div>

    ))}
  </div>
);

ListOutfit.propTypes = {
  className: propTypes.string.isRequired,
  productsList: propTypes.arrayOf(propTypes.object).isRequired,
};

export default ListOutfit;
