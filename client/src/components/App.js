import React from 'react';
import ProductDetails from './ProductDetails/ProductDetails';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Questions from './Questions/Questions';

const axios = require('axios');
const url = require('url');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 14931,
    };
  }

  componentDidMount() {
    const queryParams = url.parse(window.location.search, true).query;
    const productId = Number(queryParams.product_id);
    this.setState({ productId });
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
