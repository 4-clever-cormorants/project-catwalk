// the qty selector should take the props of the sku currently selected by the qty selector ...

import React from 'react';
import PropTypes from 'prop-types';

const QtySelector = ({ qty }) => {
  const options = [];
  console.log('qty', qty);
  for (let i = 0; i <= qty; i += 1) {
    options.push(i);
  }
  console.log(options);

  return (
    <div>
      Quantity Selector
      <select name="qty">
        {options.map((option) => <option value={option}>{option}</option>)}
      </select>
    </div>
  );
};

QtySelector.propTypes = {
  qty: PropTypes.number.isRequired,
};

export default QtySelector;
