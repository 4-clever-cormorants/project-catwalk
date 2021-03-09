import React from 'react';
import PropTypes from 'prop-types';

// import StylesDisplay from './StylesDisplay';
import Style from './Style';

import css from './StyleSelector.css';

// make it so the first one is automatically checked

const StyleSelector = ({ styles, selected, styleSelector }) => {
  const n = styles.length;
  let style1;
  let row1;
  let row2;
  if (n > 4) {
    [style1] = [styles[0]];
    row1 = styles.slice(1, 4);
    row2 = styles.slice(4, 8);
  } else {
    [style1, row1] = [styles[0], styles.slice(1)];
    row2 = [];
  }

  return (
    <div id="styleSelector" className={css.styleSelector}>
      <p id="selectedStyleContainer" className={css.selected}>
        STYLE &gt; &nbsp;
        <span id="selectedStyleName" className={css.selectedName}>
          {selected.toUpperCase()}
        </span>
      </p>
      <div id="stylesDisplay" className={css.stylesDisplay}>
        <div id="row1" className={css.row1}>
          <div id={0} key={style1.style_id} className={css.style}>
            <Style style={style1} onClick={styleSelector} defaultChecked />
          </div>
          {row1.map((style) => (
            <div key={style.style_id} className={css.style}>
              <Style style={style} onClick={styleSelector} />
            </div>
          ))}
        </div>
        <div id="row2" className={css.row2}>
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
