import React from 'react';
import PropTypes from 'prop-types';

const QtySelector = ({ qty }) => {
  const options = [];
  for (let i = 1; i <= qty; i += 1) {
    options.push(i);
  }

  return (
    <label className="qtySelector">
      Quantity Selector
      <select name="qty" id="qtySelector">
        {options.map((option) => <option value={option} key={option} className="option">{option}</option>)}
      </select>
    </label>
  );
};

QtySelector.propTypes = {
  qty: PropTypes.number.isRequired,
};

export default QtySelector;
