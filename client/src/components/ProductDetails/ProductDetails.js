import React from 'react';
import PropTypes from 'prop-types';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInformation from './ProductInformation/ProductInformation';
import StyleSelector from './StyleSelector/StyleSelector';

import product from './productDummyData';
import styles from './stylesDummyData';

class ProductDetails extends React.Component {
  constructor({ productId }) {
    super({ productId });
    this.state = {
      styleId: '76285',
      style: styles.results[0],
    };
    this.styleSelector = this.styleSelector.bind(this);
  }

  styleSelector(e) {
    // when you click on the style image, update the state with that style id
    const styleId = e.target.classList[0];
    this.setState({
      styleId,
    });
    styles.results.forEach((style) => {
      if (style.style_id === styleId) {
        this.setState({
          style,
        });
      }
    });
  }

  render() {
    const { styleId, style } = this.state;
    // console.log(styles.results);
    // for (let i = 0; i < styles.results.length; i += 1) {
    //   console.log('style', styles.results[i].style_id);
    //   if (styles.results[i].style_id === styleId) {

    //   }
    // }

    return (
      <div className="productDetails">
        <h1>ProductDetails</h1>
        <ImageGallery styleId={styleId} style={style} />
        <ProductInformation product={product} />
        <StyleSelector
          styles={styles.results}
          styleSelector={this.styleSelector}
          styleId={styleId}
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductDetails;
