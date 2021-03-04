import React from 'react';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInformation from './ProductInformation/ProductInformation';
import StyleSelector from './StyleSelector/StyleSelector';

import product from './productDummyData';
import styles from './stylesDummyData';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleId: '76285',
      style: styles.results[0],
      defaultSku: Object.keys(styles.results[0].skus)[0],
    };
    this.styleSelector = this.styleSelector.bind(this);
  }

  styleSelector(e) {
    // when you click on the style image in StylesDisplay,
    // update the state with that style id and style
    const styleId = e.target.classList[0];
    this.setState({
      styleId,
    });
    styles.results.forEach((style) => {
      if (style.style_id === styleId) {
        this.setState({
          style,
          defaultSku: Object.keys(style.skus)[0],
        });
      }
    });
  }

  render() {
    const { styleId, style, defaultSku } = this.state;

    return (
      <div className="productDetails">
        <h1>ProductDetails</h1>
        <ImageGallery styleId={styleId} style={style} />
        <ProductInformation product={product} />
        <StyleSelector
          styles={styles.results}
          styleSelector={this.styleSelector}
          style={style}
          defaultSku={defaultSku}
        />
      </div>
    );
  }
}

export default ProductDetails;
