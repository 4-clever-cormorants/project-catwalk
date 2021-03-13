import React from 'react';
import PropTypes from 'prop-types';

import AddToBagButton from './AddToBagButton';

class AddToCart extends React.Component {
  static onMouseMove(e) {
    const addToCart = document.querySelector('#addToCart');
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addToCart.style.setProperty('--x', `${x}px`);
    addToCart.style.setProperty('--y', `${y}px`);
  }

  constructor(props) {
    super(props);
    this.state = {
      added: false,
    };
    this.add = this.add.bind(this);
  }

  add() {
    const { sku } = this.props;
    if (sku !== null) {
      this.setState({
        added: true,
      });
      document.getElementById('bagMessage').innerHTML = '';
    } else {
      document.getElementById('bagMessage').innerHTML = 'Select a size and quantity';
      if (window.scrollY > 800) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }
  }

  render() {
    const { css } = this.props;
    const { added } = this.state;
    return (
      <div
        role="button"
        className={css.addToCart}
        id="addToCart"
        onMouseMove={AddToCart.onMouseMove}
        onClick={this.add}
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
        <span id="bagMessage" className={css.bagMessage} />
      </div>
    );
  }
}

AddToCart.propTypes = {
  sku: PropTypes.string,
  css: PropTypes.objectOf(PropTypes.string).isRequired,
};

AddToCart.defaultProps = {
  sku: null,
};

export default AddToCart;
