import React from 'react';
import List from './List';

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
        <List className="relatedProductsList" />
        <List className="yourOwnOutfitsList" />
      </div>
    );
  }
}

export default RelatedProducts;
