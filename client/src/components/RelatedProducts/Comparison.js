import React from 'react';
import propTypes from 'prop-types';
import style from './css/comparison.css';

const Results = ({ feature, currentValue, clickedValue }) => (
  <tr>
    <td className={style.currentValue}>{currentValue}</td>
    <td className={style.feature}>{feature}</td>
    <td className={style.clickedValue}>{clickedValue}</td>
  </tr>
);

const Comparison = ({ current, clicked }) => {
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
    <div className={style.comparison}>
      <div>comparison</div>
      <div id="compareTitle">
        <span id="compareCurrentName">{current.name}</span>
        <span id="compareClickedName">{clicked.name}</span>
      </div>
      <table className={style.comparisonTable}>
        <tbody>
          {compareCurrentFeature}
          {compareClickedFeature}
        </tbody>
      </table>
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
};

export default Comparison;
