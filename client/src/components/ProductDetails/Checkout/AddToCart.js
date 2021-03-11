import React from 'react';

import css from './Checkout.css';

const AddToCart = ({ onMouseMove }) => {
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
        <button type="submit" value="addToBag" className={css.addToCartButton}>
          <span className="fa fa-shopping-bag" />
          &nbsp;
          ADD TO BAG
        </button>
      )}
    </div>
  );
};

export default AddToCart;
