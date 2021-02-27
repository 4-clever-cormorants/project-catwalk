import React from 'react';
import ProductDetails from './ProductDetails/ProductDetails';
import RelatedProducts from './RelatedProducts/RelatedProducts';
import RatingsAndReviews from './RatingsAndReviews/RatingsAndReviews';
import Questions from './Questions/Questions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '14931',
    };
  }

  render() {
    const { productId } = this.state;
    return (
      <div id="app" className="app">
        <ProductDetails productId={productId} />
        <RelatedProducts productId={productId} />
        <RatingsAndReviews productId={productId} />
        <Questions productId={productId} />
      </div>
    );
  }
}

export default App;
