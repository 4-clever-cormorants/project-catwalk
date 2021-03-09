/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

const Style = ({ style, onClick, defaultChecked }) => (
  <div
    className={`${style.style_id}`}
    id={`a${style.style_id}`}
    onClick={onClick}
  >
    <label>
      <input type="radio" name="style" className="styleRadio" defaultChecked={defaultChecked} />
      <img
        id="styleSelectorImg"
        src={style.photos[0].url}
        alt=""
        className={style.style_id}
      />
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
