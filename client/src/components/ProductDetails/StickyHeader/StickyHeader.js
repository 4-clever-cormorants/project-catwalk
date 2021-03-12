import React from 'react';
import PropTypes from 'prop-types';

import Price from '../ProductInformation/Price';
import AddToBagButton from '../Checkout/AddToBagButton';

import css from './StickHeader.css';

const StickyHeader = ({url, product }) => {
  <div id={css.stickyContainer}>
    <div id={css.sticky}>
      <div className={css.product}>
        <div className={css.image}>

        </div>
        <div className={css.info}>
          <div className={css.name}>

          </div>
          <div className={css.category}>

          </div>
        </div>
        <div className={css.price}>
          <Price originalPrice={} salePrice={} css={}/>
        </div>
        <div className={css.addToBagButton}>
          <AddToBagButton />
        </div>
      </div>
    </div>
  </div>
};

StickyHeader.propTypes = {
  url: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
};

export default StickyHeader;
