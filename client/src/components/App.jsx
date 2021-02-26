import React from 'react';
import ProductDetails from './ProductDetails/ProductDetails';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import Questions from './Questions/Questions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="app" className="app">
        <ProductDetails />
        <RelatedProducts />
        <RatingsAndReviews />
        <Questions />
      </div>
    );
  }
}

export default App;
