/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';

const SizeSelector = ({ skus, onChange }) => (
  <form className="styleSelector" onChange={onChange}>
    size selector
    <select name="size">
      {Object.keys(skus).map((sku) => {
        if (skus[sku].quantity !== 0) {
          return (
            <option value={sku} key={sku}>
              {skus[sku].size}
            </option>
          );
        }
      })}
    </select>
  </form>
);

SizeSelector.propTypes = {
  skus: PropTypes.objectOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SizeSelector;
