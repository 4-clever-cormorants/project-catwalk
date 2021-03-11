import React from 'react';

import css from './Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={css.footer}>
        <div className={css.footerContent}>
          <div className={css.githubIcon}>
            <a href="https://github.com/4-clever-cormorants/project-catwalk">
              <i className="fa fa-github fa-2x" aria-hidden="true" />
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
  }
}

export default Footer;
