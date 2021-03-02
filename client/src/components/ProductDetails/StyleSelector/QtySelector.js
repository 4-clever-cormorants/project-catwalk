import React from 'react';
import PropTypes from 'prop-types';

const QtySelector = ({ qty }) => {
  const options = [];
  for (let i = 0; i <= qty; i += 1) {
    options.push(i);
  }

  return (
    <label className="qtySelector">
      Quantity Selector
      <select name="qty">
        {options.map((option) => <option value={option} key={option}>{option}</option>)}
      </select>
    </label>
  );
};

QtySelector.propTypes = {
  qty: PropTypes.number.isRequired,
};

export default QtySelector;
