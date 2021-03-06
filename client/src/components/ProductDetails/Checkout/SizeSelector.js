/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';

import css from './Checkout.css';

const SizeSelector = ({ skus, onChange }) => (
  <label className={css.sizeSelector} onChange={onChange}>
    <select className={css.sizeSelectorButton} id={css.sizeSelector} required>
      <option value={null} key="size" className="option">Size</option>
      {Object.keys(skus).map((sku) => {
        if (skus[sku].quantity !== 0) {
          return (
            <option value={sku} key={sku} className="option">
              {skus[sku].size}
            </option>
          );
        }
        return (
          <option value={sku} key={sku} disabled>
            {skus[sku].size}
          </option>
        );
      })}
    </select>
  </label>
);

SizeSelector.propTypes = {
  skus: PropTypes.objectOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SizeSelector;
