import React from 'react';
import PropTypes from 'prop-types';

import css from './Checkout.css';

const AddToBagButton = () => (
  <button type="submit" value="addToBag" className={css.addToCartButton}>
    <span className="fa fa-shopping-bag" />
    &nbsp;
    ADD TO BAG
  </button>
);

// AddToBagButton.propTypes = {
//   css: PropTypes.objectOf(PropTypes.string).isRequired,
// };

export default AddToBagButton;
