/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
import React from 'react';
import PropTypes from 'prop-types';

const SizeSelector = ({ skus }) => (
  <div className="styleSelector">
    size selector
    <select name="size" value="hi">
      {Object.keys(skus).map((sku) => {
        if (skus[sku].quantity !== 0) {
          console.log(sku);
          return (
            <option value={skus[sku].size}>
              {skus[sku].size}
            </option>
          );
        }
      })}
    </select>
  </div>
);

SizeSelector.propTypes = {
  skus: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SizeSelector;
