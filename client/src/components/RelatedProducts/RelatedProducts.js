import React from 'react';
import List from './List';
import dummy from './dummy_related';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="RR">
        <span>RelatedProducts</span>
        <List className="relatedProductsList" productsList={dummy.relatedProducts} />
      </div>
    );
  }
}

export default RelatedProducts;
