import React from 'react';
import PropTypes from 'prop-types';

const SizeSelector = ({ skus }) => (
  <label>
    size selector
    <select name="size" value="hi">
      <option>hi</option>
    </select>
  </label>
);

SizeSelector.propTypes = {
  skus: PropTypes.objectOf().isRequired,
};

export default SizeSelector;
