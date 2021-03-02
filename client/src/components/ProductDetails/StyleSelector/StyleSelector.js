import React from 'react';
import PropTypes from 'prop-types';

import StylesDisplay from './StylesDisplay';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import AddToCart from './AddToCart';
import Favorite from './Favorite';

// refactor to hold the state of the selected style and
// then refactor the size selector and qty selector to reflect the options for that selected style

class StyleSelector extends React.Component {
  constructor({ styles, styleId, onClick }) {
    super({ styles, styleId, onClick });
    this.state = {
      styleId,
      selectedStyle: styles[0],
      selectedSku: '440865',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      selectedSku: e.target.value,
    });
  }

  render() {
    const { styles, onClick } = this.props;
    const { selectedStyle, selectedSku } = this.state;
    const { skus } = selectedStyle;
    const qty = skus[selectedSku].quantity;
    return (
      <div className="styleSelector">
        <h2>style selector</h2>
        <StylesDisplay styles={styles} onClick={onClick} />
        <SizeSelector skus={skus} onChange={this.handleChange} />
        <QtySelector qty={qty} />
        <AddToCart />
        <Favorite />
      </div>
    );
  }
}

StyleSelector.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.shape({
    style_id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    default: PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  })).isRequired,
  styleId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StyleSelector;
