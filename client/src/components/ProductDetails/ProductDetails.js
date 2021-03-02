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
      productId,
      styleId: '76285',
      sku: '440865',
    };
    this.styleSelector = this.styleSelector.bind(this);
    this.skuSelector = this.skuSelector.bind(this);
  }

  styleSelector(e) {
    // when you click on the style image, update the state with that style id
    const styleId = e.target.classList[0];
    this.setState({
      styleId,
    });
  }

  skuSelector(e) {
    console.log(e.target);
    this.setState({
      sku: 'hi',
    });
  }

  render() {
    const { styleId } = this.state;
    // console.log(styles.results);
    // for (let i = 0; i < styles.results.length; i += 1) {
    //   console.log('style', styles.results[i].style_id);
    //   if (styles.results[i].style_id === styleId) {

    //   }
    // }
    const photos = styles.results[0].photos;

    return (
      <div className="productDetails">
        <h1>ProductDetails</h1>
        <ImageGallery photos={photos} styleId={styleId} />
        <ProductInformation product={product} />
        <StyleSelector
          styles={styles.results}
          styleSelector={this.styleSelector}
          skuSelector={this.skuSelector}
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
