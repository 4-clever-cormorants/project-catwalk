import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import ProductInformation from './ProductInformation/ProductInformation';
// import StyleSelector from './StyleSelector/StyleSelector';

import product from './productDummyData';
import styles from './stylesDummyData';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        ProductDetails
        <ImageGallery photos={styles.results[0].photos} />
        <ProductInformation product={product} />
        {/* <ProductInformation />
        <StyleSelector /> */}
      </div>
    );
  }
}

export default ProductDetails;
