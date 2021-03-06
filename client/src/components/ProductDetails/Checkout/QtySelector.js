/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import css from './Checkout.css';

const QtySelector = ({ qty }) => {
  const options = [];
  for (let i = 1; i <= qty; i += 1) {
    options.push(i);
  }

  return (
    <label className={css.qtySelector}>
      <select name="qty" className={css.qtySelectorButton} id="qtySelector">
        <option value={null} key="qty" className="option">Qty</option>
        {options.map((option) => <option value={option} key={option} className="option">{option}</option>)}
      </select>
    </label>
  );
};

QtySelector.propTypes = {
  qty: PropTypes.number.isRequired,
};

export default QtySelector;
