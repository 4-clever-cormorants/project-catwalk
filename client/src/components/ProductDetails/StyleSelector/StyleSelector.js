import React from 'react';
import PropTypes from 'prop-types';

import StylesDisplay from './StylesDisplay';
import SizeSelector from './SizeSelector';

const StyleSelector = () => (
  <div className="styleSelector">
    style selector
    <StylesDisplay />
    <SizeSelector />
  </div>
);

export default StyleSelector;
