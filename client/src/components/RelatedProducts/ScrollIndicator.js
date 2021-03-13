import React from 'react';
import propTypes from 'prop-types';
import style from './css/indicator.css';

const ScrollIndicator = ({ scrollLength, listName, scrollToInd }) => {
  const indicator = [];
  const hide = (listName === 'outfitList');
  for (let i = 0; i < scrollLength; i += 1) {
    const checker = (i === 0 || i === (scrollLength - 1));
    indicator.push(
      <div
        className={`${listName}indicator ind${i} ${style.indicator} ${i < 4 ? style.current : ''} ${(checker && hide) ? style.hide : ''}`}
        key={`${listName}indicator${i}`}
        onClick={scrollToInd.bind(this, listName, i)}
        onKeyPress={scrollToInd.bind(this, listName, i)}
        role="button"
        tabIndex={0}
        aria-label="Mute volume"
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
  scrollToInd: propTypes.func.isRequired,
};

export default ScrollIndicator;
