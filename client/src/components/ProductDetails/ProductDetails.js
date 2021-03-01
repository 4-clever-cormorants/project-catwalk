import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';

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
        <ImageGallery />
      </div>
    );
  }
}

export default ProductDetails;
