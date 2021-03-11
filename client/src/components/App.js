import React from 'react';
import axios from 'axios';
import Header from './Header/Header';
import ProductDetails from './ProductDetails/ProductDetails';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import Questions from './Questions/Questions';
import Footer from './Footer/Footer';

const url = require('url');

class App extends React.Component {
  static interactions(e, widget) {
    let element;
    if (e.target.id.length !== 0) {
      element = e.target.id;
    } else if (e.target.classList.length !== 0) {
      [element] = e.target.classList;
    } else {
      element = e.target.localName;
    }
    const body = {
      element,
      widget,
      time: new Date(),
    };
    axios.post('/interactions', body)
      .then(() => {
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

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
        <Header />
        <ProductDetails
          productId={productId}
          getProductName={this.getProductName}
          interactions={App.interactions}
        />
        <RelatedProducts productId={productId} interactions={App.interactions} />
        <Questions
          productId={productId}
          productName={productName}
          interactions={App.interactions}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
