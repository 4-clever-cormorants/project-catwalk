import React from 'react';
import PropTypes from 'prop-types';

import AddToBagButton from './AddToBagButton';

// import css from './Checkout.css';

const AddToCart = ({ onMouseMove, css }) => {
  const [added, add] = React.useState(false);
  return (
    <div role="button" className={css.addToCart} id="addToCart" onMouseMove={onMouseMove} onClick={() => { add(true); }} onKeyPress={() => {}} tabIndex={0}>
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
  css: PropTypes.objectOf(PropTypes.string).isRequired,
};

AddToCart.propTypes = {
  onMouseMove: PropTypes.func.isRequired,
};

export default AddToCart;
