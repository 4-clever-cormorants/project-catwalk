import React from 'react';
import List from './List';
import ListOutfit from './ListOutfit';
import AddToOutfit from './AddToOutfit';
import Comparsion from './Comparsion';
import dummy from './dummy_related';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outfitList: dummy.relatedProducts,
      clicked: undefined,
      current: dummy.currentProduct,
    };
    this.addToOutfitHandler = this.addToOutfitHandler.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.compareHandler = this.compareHandler.bind(this);
  }

  addToOutfitHandler() {
    const { outfitList } = this.state;
    const checker = outfitList.filter((item) => item.id === dummy.currentProduct.id);
    if (checker.length === 0) {
      this.setState({
        outfitList: [dummy.currentProduct, ...outfitList],
      });
    }
  }

  dropHandler(id) {
    const { outfitList } = this.state;
    this.setState({
      outfitList: outfitList.filter((item) => item.id !== id),
    });
  }

  compareHandler(item) {
    this.setState({
      clicked: item,
    });
  }

  render() {
    const { outfitList, clicked, current } = this.state;
    let comparsion;
    if (clicked) {
      comparsion = <Comparsion current={current} clicked={clicked} />;
    }

    return (
      <div className="RR">
        <span>RelatedProducts</span>
        {comparsion}
        <List className="relatedProductsList" productsList={dummy.relatedProducts} compareHandler={this.compareHandler} />
        <div className="outfitListWithAdd">
          <AddToOutfit addToOutfitHandler={this.addToOutfitHandler} />
          <ListOutfit className="yourOwnOutfitList" productsList={outfitList} dropHandler={this.dropHandler} />
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
