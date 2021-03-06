import React from 'react';
import PropTypes from 'prop-types';

// import StylesDisplay from './StylesDisplay';
import Style from './Style';

import css from './StyleSelector.css';

const StyleSelector = ({ styles, selected, styleSelector }) => {
  const n = styles.length;
  let row1;
  let row2;
  if (n > 4) {
    row1 = styles.slice(0, 4);
    row2 = styles.slice(4, 8);
  } else {
    row1 = styles;
    row2 = [];
  }

  return (
    <div className={css.styleSelector}>
      <p className={css.selected}>
        STYLE &gt; &nbsp;
        <span className={css.selectedName}>
          {selected.toUpperCase()}
        </span>
      </p>
      <div className={css.stylesDisplay}>
        <div className={css.row1}>
          {row1.map((style) => (
            <div key={style.style_id} className={css.style}>
              <Style style={style} onClick={styleSelector} />
            </div>
          ))}
        </div>
        <div className={css.row2}>
          {row2.map((style) => (
            <div key={style.style_id} className={css.style}>
              <Style style={style} onClick={styleSelector} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
  selected: PropTypes.string.isRequired,
  styleSelector: PropTypes.func.isRequired,
};

export default StyleSelector;
