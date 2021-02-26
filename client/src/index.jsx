import React from 'react';
import ProductDetails from './components/ProductDetails.jsx';
import RelatedProducts from './components/RelatedProducts.jsx';
import RatingsAndReviews from './components/RatingsAndReviews.jsx';
import QA from './components/QA.jsx';

class App extends React.component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="app">
        <ProductDetails />
        <RelatedProducts />
        <RatingsAndReviews />
        <QA />
      </div>
    )
  }
}

export default App;