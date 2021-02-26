import React from 'react';
import ProductDetails from './components/ProductDetails/ProductDetails';
import RelatedProducts from './components/RelatedProducts';
import RatingsAndReviews from './components/RatingsAndReviews';
import Questions from './components/Questions';

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
        <Questions />
      </div>
    );
  }
}

export default App;
