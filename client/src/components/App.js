import React from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails/ProductDetails';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Questions from './Questions/Questions';

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

  interactions(widget, e) {
    axios.post('/interactions', {
      "element": e.target,
      "widget": widget,
      "time": JSON.stringify(new Date())
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
  };

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
