import React from 'react';
import PropTypes from 'prop-types';

// import StylesDisplay from './StylesDisplay';
import Style from './Style';

import css from './StyleSelector.css';

const StyleSelector = ({
  styles, styleSelector,
}) => {
  const n = styles.length;
  if (n > 4) {
    styles.slice(0, 4);
  }
  return (
    <div className={css.styleSelector}>
      <h2>style selector (click to view style)</h2>
      <div className={css.stylesDisplay}>
        {styles.map((style) => (
          <div key={style.style_id} className={css.style}>
            <Style style={style} onClick={styleSelector} />
          </div>
        ))}

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
  styleSelector: PropTypes.func.isRequired,
};

export default StyleSelector;
