/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import css from './StyleSelector.css';

const Style = ({ style, onClick, defaultChecked }) => (
  <div
    className={`${style.style_id} ${css.style}`}
    id={`a${style.style_id}`}
    onClick={onClick}
  >
    <label>
      <input type="radio" name="style" className="styleRadio" defaultChecked={defaultChecked} />
      <div className={css.imgContainer}>
        <img
          id="styleSelectorImg"
          src={style.photos[0].url}
          alt=""
          className={style.style_id}
        />
        <div className={css.middle}>
          <span className={`${css.check} fa fa-check-circle`} />
        </div>
      </div>
    </label>
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
  defaultChecked: PropTypes.bool,
};

Style.defaultProps = {
  defaultChecked: null,
};

export default Style;
