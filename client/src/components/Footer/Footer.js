import React from 'react';

import css from './Footer.css';

const Footer = () => (
  <div className={css.footer}>
    <div className={css.footerContent}>
      <div className={css.githubIcon}>
        <a href="https://github.com/4-clever-cormorants/project-catwalk" title="GitHub Link">
          <i className="fa fa-github fa-2x" aria-hidden="true" title="GitHub Icon" />
        </a>
      </div>
      <div className={`${css.topButtonContainer} topButtonContainer`}>
        <button
          className={`${css.topButton} topButton`}
          type="button"
          onClick={() => window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })}
        >
          <i className="fa fa-chevron-up" aria-hidden="true" />
          <span>Top</span>
        </button>
      </div>
    </div>
  </div>
);

export default Footer;
