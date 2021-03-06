import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import List from './List';
import ListOutfit from './ListOutfit';
import AddToOutfit from './AddToOutfit';
import Comparison from './Comparison';
import style from './css/relatedProducts.css';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
      outfitList: [],
      current: undefined,
      clicked: undefined,
      load: false,
      outfitLoad: false,
    };
    this.addToOutfitHandler = this.addToOutfitHandler.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.compareHandler = this.compareHandler.bind(this);
    this.getInfo();
    this.getOutfitList();
  }

  getInfo() {
    const { productId } = this.props;
    axios
      .get(`/related/relatedProducts?product_id=${productId}`)
      .then((response) => {
        if (response.data) {
          this.setState({
            current: response.data[0],
            related: response.data.slice(1),
            load: true,
          });
        }
      });
  }

  getOutfitList() {
    axios.get('/related/outfitList').then((response) => {
      if (response.data) {
        this.setState({
          outfitList: response.data,
          outfitLoad: true,
        });
      }
    });
  }

  addToOutfitHandler() {
    const { current, outfitList } = this.state;
    const checker = outfitList.filter((item) => item.id === current.id);
    if (checker.length === 0) {
      axios.post(`/related/outfitList?product_id=${current.id}`);
      this.setState({
        outfitList: [current, ...outfitList],
      });
    }
  }

  dropHandler(id) {
    const { outfitList } = this.state;
    axios.post(`/related/outfitListDrop?product_id=${id}`);
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
    const {
      outfitList, clicked, current, related, load, outfitLoad,
    } = this.state;
    let comparison;
    if (clicked) {
      comparison = <Comparison current={current} clicked={clicked} />;
    }

    return (
      <div className="relatedProducts">
        {load ? (
          <div>
            <span>RelatedProducts</span>
            {comparison}
            <List productsList={related} compareHandler={this.compareHandler} />
          </div>
        ) : (
          ''
        )}
        {outfitLoad ? (
          <div className={style.outfitListWithAdd}>
            <AddToOutfit addToOutfitHandler={this.addToOutfitHandler} />
            <ListOutfit
              productsList={outfitList}
              dropHandler={this.dropHandler}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

RelatedProducts.propTypes = {
  productId: propTypes.number.isRequired,
};

export default RelatedProducts;
