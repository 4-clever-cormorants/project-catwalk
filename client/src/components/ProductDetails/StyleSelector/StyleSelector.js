import React from 'react';
import PropTypes from 'prop-types';

import StylesDisplay from './StylesDisplay';
import SizeSelector from './SizeSelector';

// refactor to hold the state of the selected style and
// then refactor the size selector and qty selector to reflect the options for that selected style

class StyleSelector extends React.Component {
  constructor({ styles }) {
    super({ styles });
    this.state = {
      selectedStyle: styles[0],
    };
  }

  render() {
    const { styles } = this.props;
    const { selectedStyle } = this.state;
    const { skus } = selectedStyle;
    return (
      <div className="styleSelector">
        style selector
        <StylesDisplay styles={styles} />
        <SizeSelector skus={skus} />
      </div>
    );
  }
}

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    default: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
};

export default StyleSelector;
