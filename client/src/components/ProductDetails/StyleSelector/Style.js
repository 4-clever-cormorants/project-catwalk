/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import css from './StyleSelector.css';

const Style = ({ style, onClick }) => (
  <div
    className={style.style_id}
    id={style.style_id}
    onClick={onClick}
  >
    <input type="radio" name="thumbnail" className={css.radio} />
    <img
      src={style.photos[0].url}
      alt=""
      className={style.style_id}
    />
  </div>
);

Style.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Style;
