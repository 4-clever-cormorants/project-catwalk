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
    };
  }

  render() {
    const { productId } = this.state;
    return (
      <div id="app" className="app">
        <ProductDetails productId={productId} />
        <RelatedProducts productId={productId} />
        <Questions productId={productId} />
      </div>
    );
  }
}

export default App;
