import React from 'react';

import css from './ProductInformation.css';

const Share = () => (
  <div className={css.share}>
    <span className={`${css.fb} fa fa-facebook`} />
    <span className={`${css.tw} fa fa-twitter`} />
    <span className={`${css.p} fa fa-pinterest-p`} />
  </div>
);

export default Share;
