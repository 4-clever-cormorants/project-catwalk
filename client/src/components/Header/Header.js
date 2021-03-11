import React from 'react';
import PropTypes from 'prop-types';

import css from './Header.css';

const Header = () => (
  <div className={css.Header}>
    <div className={css.logo}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/75/Microcarbo_melanoleucos_Austins_Ferry_3.jpg" alt="cormorant" />
    </div>
    <div className={css.title}>
      Cormorant Boutique
    </div>
    <div className={css.selection}>
      <span className={css.sale}>
        Sale
      </span>
      <span className={css.women}>
        Women
      </span>
      <span className={css.men}>
        Men
      </span>
      <span className={css.kids}>
        Kids
      </span>
      <span className={css.Activewear}>
        Activewear
      </span>
      <span className={css.home}>
        Home
      </span>
      <span className={css.garden}>
        Garden
      </span>
      <span className={css.beauty}>
        Beauty
      </span>
    </div>
  </div>
);

export default Header;
