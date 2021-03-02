import React from 'react';
import List from './List';
import AddToOutfit from './AddToOutfit';
import dummy from './dummy_related';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitList: [],
    };
    this.addToOutfitHandler = this.addToOutfitHandler.bind(this);
  }

  addToOutfitHandler() {
    this.setState({
      outfitList: dummy.currentProduct,
    });
  }

  render() {
    const { outfitList } = this.state;
    return (
      <div className="RR">
        <span>RelatedProducts</span>
        <List className="relatedProductsList" productsList={dummy.relatedProducts} />
        <div className="outfitListWithAdd">
          <AddToOutfit addToOutfitHandler={this.addToOutfitHandler} />
          <List className="yourOwnOutfitList" productsList={outfitList} />
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
