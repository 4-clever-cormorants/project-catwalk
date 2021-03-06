import React from 'react';
import ProductDetails from './ProductDetails/ProductDetails';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Questions from './Questions/Questions';

const axios = require('axios');
const url = require('url');

class App extends React.Component {
  constructor(props) {
    super(props);
    const queryParams = url.parse(window.location.search, true).query;
    const productId = parseInt(queryParams.product_id, 10);
    this.state = {
      productId: !Number.isNaN(productId) ? productId : 14931,
      productName: 'Manuela Pants',
    };
    this.getProductName = this.getProductName.bind(this);
  }

  getProductName(productName) {
    this.setState({
      productName,
    });
  }

  render() {
    const { productId, productName } = this.state;
    return (
      <div id="app" className="app">
        <ProductDetails productId={productId} getProductName={this.getProductName} />
        <RelatedProducts productId={productId} />
        <Questions productId={productId} productName={productName} />
      </div>
    );
  }
}

export default App;
