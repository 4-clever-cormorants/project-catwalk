import React from 'react';
import PropTypes from 'prop-types';

import AddToBagButton from './AddToBagButton';

const AddToCart = ({ sku, onMouseMove, css }) => {
  const [added, add] = React.useState(false);
  return (
    <div
      role="button"
      className={css.addToCart}
      id="addToCart"
      onMouseMove={onMouseMove}
      onClick={() => {
        if (sku !== null) {
          add(true);
        }
      }}
      onKeyPress={() => {}}
      tabIndex={0}
    >
      {added ? (
        <button type="submit" value="addToBag" className={css.addToCartButton}>
          <span className="fa fa-shopping-bag" />
          &nbsp;
          ADDED TO BAG
        </button>
      ) : (
        <AddToBagButton />
      )}
    </div>
  );
};

AddToCart.propTypes = {
  sku: PropTypes.string,
  css: PropTypes.objectOf(PropTypes.string).isRequired,
  onMouseMove: PropTypes.func.isRequired,
};

AddToCart.defaultProps = {
  sku: null,
};

export default AddToCart;
