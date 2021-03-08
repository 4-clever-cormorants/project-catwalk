import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import List from './List';
import ListOutfit from './ListOutfit';
import AddToOutfit from './AddToOutfit';
import Comparison from './Comparison';
import style from './css/relatedProducts.css';
import dummy from './dummy_related';

class RelatedProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      related: [],
      outfitList: [],
      wishList: [],
      current: undefined,
      clicked: undefined,
      load: false,
      outfitLoad: false,
    };
    this.addToOutfitHandler = this.addToOutfitHandler.bind(this);
    this.addToWishHandler = this.addToWishHandler.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.dropWishHandler = this.dropWishHandler.bind(this);
    this.compareHandler = this.compareHandler.bind(this);
    this.closeCompare = this.closeCompare.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    this.getInfo();
    this.getOutfitList();
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  getInfo() {
    const { productId } = this.props;
    const load = [
      axios
        .get(`/related/relatedProducts?product_id=${productId}`)
        .then((response) => {
          if (response.data) {
            this.setState({
              current: response.data[0],
              related: response.data.slice(1),
            });
          }
        }),
      axios.get('/wishList/getAll').then((response) => {
        if (response.data) {
          this.setState({
            wishList: response.data,
          });
        }
      }),
    ];
    Promise.all(load)
      .then(this.setState({ load: true }));
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

  addToWishHandler(id, e) {
    e.stopPropagation();
    const { wishList } = this.state;
    const checker = wishList.filter((item) => item === id);
    if (checker.length === 0) {
      axios.post(`/wishList/add?product_id=${id}`);
      this.setState({
        wishList: [...wishList, id],
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

  dropWishHandler(id, e) {
    e.stopPropagation();
    const { wishList } = this.state;
    axios.post(`/wishList/drop?product_id=${id}`);
    this.setState({
      wishList: wishList.filter((item) => item !== id),
    });
  }

  compareHandler(item) {
    this.setState({
      clicked: item,
    });
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.closeCompare();
    }
  }

  closeCompare() {
    this.setState({
      clicked: undefined,
    });
  }

  render() {
    const {
      outfitList,
      wishList,
      clicked,
      current,
      related,
      load,
      outfitLoad,
    } = this.state;
    let comparison;
    if (clicked) {
      comparison = (
        <Comparison
          current={current}
          clicked={clicked}
          closeCompare={this.closeCompare}
        />
      );
    }

    return (
      <div className={style.relatedProducts}>
        {load ? (
          <div className={style.gridContainer0}>
            <span>Related Products</span>
            {comparison}
            <List
              productsList={related}
              wishList={wishList}
              compareHandler={this.compareHandler}
              addToWishHandler={this.addToWishHandler}
              dropWishHandler={this.dropWishHandler}
            />
          </div>
        ) : (
          ''
        )}
        {outfitLoad ? (
          <div className={style.gridContainer1}>
            <span>Your Ownoutfit</span>
            <div className={style.outfitListWithAdd}>
              <AddToOutfit addToOutfitHandler={this.addToOutfitHandler} />
              <ListOutfit
                productsList={outfitList}
                dropHandler={this.dropHandler}
              />
            </div>
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
