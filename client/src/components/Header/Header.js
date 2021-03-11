import React from 'react';

import css from './Header.css';

const Header = () => (
  <div className={css.headerContainer}>
    <div className={css.covidSafe}>
      <div className={css.safetyMessage}>
        Safe in-store shopping.
      </div>
      &nbsp;
      <div className={css.safetyDetail}>
        <u>Our safety practices to keep you healthy</u>
      </div>
    </div>
    <div className={css.header}>
      <div className={css.logo}>
        &nbsp; Le boutique
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
        <span className={css.activewear}>
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
      <div className={css.icons}>
        <div className={`${css.search} ${css.icon}`}>
          <span className="fa fa-search" />
        </div>
        <div className={`${css.start} ${css.icon}`}>
          <span className="fa fa-star" />
        </div>
        <div className={`${css.bag} ${css.icon}`}>
          <span className="fa fa-shopping-bag" />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
