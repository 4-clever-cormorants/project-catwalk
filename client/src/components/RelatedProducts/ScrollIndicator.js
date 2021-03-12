import React from 'react';
import propTypes from 'prop-types';
import style from './css/indicator.css';

const ScrollIndicator = ({ scrollLength, listName }) => {
  const indicator = [];
  // const hide = listName === 'relatedList' ? 4 : 4;
  for (let i = 0; i < scrollLength; i += 1) {
    indicator.push(
      <div
        className={`${listName}indicator ind${i} ${style.indicator} ${i < 4 ? style.current : ''} ${(i === 0 || i === (scrollLength - 1)) ? style.hide : ''}`}
        key={`${listName}indicator${i}`}
      />,
    );
  }

  return (
    <div className={`${listName}indicatorContainer ${style.container}`}>
      <div className={style.wrapper}>
        {indicator}
      </div>
    </div>
  );
};

ScrollIndicator.propTypes = {
  scrollLength: propTypes.number.isRequired,
  listName: propTypes.string.isRequired,
};

export default ScrollIndicator;
