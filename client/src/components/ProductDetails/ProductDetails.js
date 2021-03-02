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
      productId: '14931',
      styleId: '76285',
      sku: '440865',
    };
  }

  render() {
    // const { productId, styleId, sku } = this.state;
    // console.log(styles.results);
    // for (let i = 0; i < styles.results.length; i += 1) {
    //   console.log('style', styles.results[i].style_id);
    //   if (styles.results[i].style_id === styleId) {

    //   }
    // }
    const photos = styles.results[0].photos;

    return (
      <div className="productDetails">
        ProductDetails
        <ImageGallery photos={photos} />
        <ProductInformation product={product} />
        <StyleSelector styles={styles.results} />
      </div>
    );
  }
}

export default ProductDetails;
