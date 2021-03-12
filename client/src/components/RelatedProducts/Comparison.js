import React from 'react';
import propTypes from 'prop-types';
import style from './css/comparison.css';

const Results = ({ feature, currentValue, clickedValue }) => (
  <tr className={style.row}>
    <td className={`currentValue ${style.currentValue}`}>{currentValue}</td>
    <td className={`feature ${style.feature}`}>{feature}</td>
    <td className={`clickedValue ${style.clickedValue}`}>{clickedValue}</td>
  </tr>
);

const Comparison = ({
  current, clicked, closeCompare, isClicked,
}) => {
  const currentFeatures = {};
  for (let i = 0; i < current.features.length; i += 1) {
    currentFeatures[current.features[i].feature] = current.features[i].value;
  }
  const clickedFeatures = {};
  for (let i = 0; i < clicked.features.length; i += 1) {
    clickedFeatures[clicked.features[i].feature] = clicked.features[i].value;
  }

  const featureChecker = (feature, features) => {
    if (feature in features) {
      return features[feature] || '✓';
    }
    return '';
  };

  const compareCurrentFeature = Object.keys(currentFeatures).map((item) => <Results key={item} feature={item} currentValue={currentFeatures[item] || '✓'} clickedValue={featureChecker(item, clickedFeatures)} />);
  const compareClickedFeature = Object.keys(clickedFeatures).map((item) => {
    if (currentFeatures[item] === undefined) {
      return <Results key={item} feature={item} currentValue={featureChecker(item, currentFeatures)} clickedValue={clickedFeatures[item] || '✓'} />;
    } return undefined;
  });

  return (
    <div className={`${style.modal} ${isClicked ? style.modalShow : ''}`}>
      <div className={`blocker ${style.blocker}`} onClick={closeCompare} onKeyPress={closeCompare} role="button" tabIndex={0} aria-label="Mute volume" />
      <div className={style.comparison} id="comparison">
        <div className={style.compareTitle} id="comparisonTitle">comparison</div>
        <i className={`${style.close} fa fa-times`} id="comparisonClose" onClick={closeCompare} onKeyPress={closeCompare} role="button" tabIndex={0} aria-label="Mute volume" />
        <table className={style.comparisonTable}>
          <tbody>
            <tr>
              <td className={style.titleRow} id="comparisonCurrent">{current.name}</td>
              <td className={style.titleRow} id="comparisonfeatures">features</td>
              <td className={style.titleRow} id="comparisonClicked">{clicked.name}</td>
            </tr>
            {compareCurrentFeature}
            {compareClickedFeature}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Results.propTypes = {
  feature: propTypes.string.isRequired,
  currentValue: propTypes.string.isRequired,
  clickedValue: propTypes.string.isRequired,
};

Comparison.propTypes = {
  current: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    features: propTypes.arrayOf(propTypes.object).isRequired,
  }).isRequired,
  clicked: propTypes.shape({
    name: propTypes.string.isRequired,
    id: propTypes.number.isRequired,
    features: propTypes.arrayOf(propTypes.object).isRequired,
  }).isRequired,
  closeCompare: propTypes.func.isRequired,
  isClicked: propTypes.bool.isRequired,
};

export default Comparison;
