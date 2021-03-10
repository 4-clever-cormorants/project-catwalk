import React from 'react';
import propTypes from 'prop-types';
import style from './css/relatedProducts.css';

const Next = ({ list, scrollNext }) => (
  <i className={`sideButtons ${style.side} fa fa-chevron-right`} onClick={scrollNext.bind(this, list)} onKeyPress={scrollNext.bind(this, list)} role="button" tabIndex={0} aria-label="Mute volume" />
);

Next.propTypes = {
  list: propTypes.string.isRequired,
  scrollNext: propTypes.func.isRequired,
};

export default Next;
