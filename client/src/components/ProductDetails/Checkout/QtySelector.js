/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import css from './Checkout.css';

const QtySelector = ({ qty }) => {
  const options = [];
  if (qty !== null) {
    let q = qty;
    if (q > 15) {
      q = 15;
    }
    for (let i = 1; i <= q; i += 1) {
      options.push(i);
    }
  }

  return (
    <label className={css.qtySelector}>
      <select name="qty" className={css.qtySelectorButton} id="qtySelector">
        <option value={null} key="qty" className="option">Qty</option>
        { qty !== null
          ? options.map(
            (option) => <option value={option} key={option} className="option">{option}</option>,
          )
          : <option disabled>Must select a size</option>}
      </select>
    </label>
  );
};

QtySelector.propTypes = {
  qty: PropTypes.number,
};

QtySelector.defaultProps = {
  qty: null,
};

export default QtySelector;
