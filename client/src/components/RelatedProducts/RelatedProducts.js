import React from 'react';
import List from './List';
import ListOutfit from './ListOutfit';
import AddToOutfit from './AddToOutfit';
import dummy from './dummy_related';
import Favor from './Favor';
import Drop from './Drop';

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
        <List className="relatedProductsList" productsList={dummy.relatedProducts} action={Favor} />
        <div className="outfitListWithAdd">
          <AddToOutfit addToOutfitHandler={this.addToOutfitHandler} />
          <ListOutfit className="yourOwnOutfitList" productsList={outfitList} action={Drop} />
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
