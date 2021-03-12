import React from 'react';
import propTypes from 'prop-types';
import style from './css/indicator.css';

const ScrollIndicator = ({ scrollLength, listName }) => {
  let indicator = [];
  for (let i = 0; i < scrollLength; i += 1) {
    indicator.push(<div className={`${listName}indicator ind${i} ${style.indicator} ${i < 4 ? style.current : ''}`} key={`${listName}indicator${i}`} />);
  }

  return (
    <div className={`${listName}indicatorContainer ${style.container}`}>
      <div className={style.wrapper}>
        {indicator}
      </div>
    </div>
  );
};

export default ScrollIndicator;
