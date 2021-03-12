/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Price from '../ProductInformation/Price';
import Shipping from '../ProductInformation/Shipping';
import AddToCart from '../Checkout/AddToCart';

import css from './StickyHeader.css';
import bag from '../Checkout/Checkout.css';
import price from '../ProductInformation/ProductInformation.css';

const StickyHeader = ({
  style, product, onMouseMove,
}) => (
  <div id={css.stickyContainer}>
    <div id={css.sticky}>
      <div className={css.product}>
        <div className={css.image}>
          <img src={`${style.photos[0].url}`} alt="" />
        </div>
        <div className={css.info}>
          <div className={css.category}>
            {product.category.toUpperCase()}
          </div>
          <div className={css.name}>
            {product.name}
          </div>
        </div>
      </div>
      <div className={css.right}>
        <div className={css.flexCol}>
          <div className={css.price}>
            <Price originalPrice={style.original_price} salePrice={style.sale_price} css={price} />
          </div>
          <div className={css.shipping}>
            <Shipping />
          </div>
        </div>
        <div className={css.addToBagButton}>
          <AddToCart onMouseMove={onMouseMove} css={bag} />
        </div>
      </div>
    </div>
  </div>
);

StickyHeader.propTypes = {
  style: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  onMouseMove: PropTypes.func.isRequired,
};

export default StickyHeader;
