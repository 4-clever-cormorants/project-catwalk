import React from 'react';
import style from './css/relatedProducts.css';

const Next = ({ list, scrollNext }) => (
  <i className={`${style.side} fa fa-chevron-right`} onClick={scrollNext.bind(this, list)} onKeyPress={scrollNext.bind(this, list)} role="button" tabIndex={0} aria-label="Mute volume" />
);

export default Next;
