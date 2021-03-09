import React from 'react';
import propTypes from 'prop-types';
import style from './css/relatedProducts.css';

const Prev = ({ list, scrollPrev }) => (
  <i className={`${style.side} fa fa-chevron-left`} onClick={scrollPrev.bind(this, list)} onKeyPress={scrollPrev.bind(this, list)} role="button" tabIndex={0} aria-label="Mute volume" />
);

Prev.propTypes = {
  list: propTypes.string.isRequired,
  scrollPrev: propTypes.func.isRequired,
};

export default Prev;
