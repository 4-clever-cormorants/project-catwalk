import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import List from './List';
import ListOutfit from './ListOutfit';
import AddToOutfit from './AddToOutfit';
import Comparison from './Comparison';
import Next from './Next';
import Prev from './Prev';
import style from './css/relatedProducts.css';
// import dummy from './dummy_related';

class RelatedProducts extends React.Component {
  static scrollNext(list) {
    const scroll = document.querySelector(`.${list}`);
    const scrollMax = scroll.scrollWidth - scroll.clientWidth;
    const currentScroll = scroll.scrollLeft;
    if (currentScroll + (255 * 4) > scrollMax) {
      scroll.scrollLeft = scrollMax;
    } else {
      scroll.scrollLeft = Math.floor((currentScroll + (255 * 4)) / 255) * 255;
    }
  }

  static scrollPrev(list) {
    const scroll = document.querySelector(`.${list}`);
    const currentScroll = scroll.scrollLeft;
    if (currentScroll - (255 * 4) < 0) {
      scroll.scrollLeft = 0;
    } else {
      scroll.scrollLeft = Math.floor((currentScroll - (255 * 4)) / 255) * 255;
    }
  }

  static onMouseMove(e) {
    const addToOutfitCard = document.querySelector('#addToOutfitCard');
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addToOutfitCard.style.setProperty('--x', `${x}px`);
    addToOutfitCard.style.setProperty('--y', `${y}px`);
  }

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
      relatedListScroll: 0,
      outfitListScroll: 0,
    };
    this.addToOutfitHandler = this.addToOutfitHandler.bind(this);
    this.addToWishHandler = this.addToWishHandler.bind(this);
    this.dropHandler = this.dropHandler.bind(this);
    this.dropWishHandler = this.dropWishHandler.bind(this);
    this.compareHandler = this.compareHandler.bind(this);
    this.closeCompare = this.closeCompare.bind(this);
    this.escFunction = this.escFunction.bind(this);
    this.scrollHandler = this.scrollHandler.bind(this);
  }

  componentDidMount() {
    const { interactions } = this.props;
    this.getInfo();
    this.getOutfitList();
    document.addEventListener('keydown', this.escFunction, false);
    const rrComponent = document.querySelector('#relatedProducts');
    if (rrComponent) {
      rrComponent.addEventListener('click',
        (e) => interactions(e, 'relatedProducts'));
    }
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

  scrollHandler(list) {
    const scroll = document.querySelector(`.${list}`);
    const scrollMax = scroll.scrollWidth - scroll.clientWidth;
    const currentScroll = scroll.scrollLeft;
    const { relatedListScroll, outfitListScroll } = this.state;
    let index;
    if (currentScroll === scrollMax) {
      index = 1;
    }
    if (currentScroll === 0) {
      index = 0;
    }
    if (list === 'relatedList') {
      if (index !== relatedListScroll) {
        this.setState({
          relatedListScroll: index,
        });
      }
    }
    if (list === 'outfitList') {
      if (index !== outfitListScroll) {
        this.setState({
          outfitListScroll: index,
        });
      }
    }
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
      relatedListScroll,
      outfitListScroll,
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
      <div className={style.relatedProducts} id="relatedProducts">
        {relatedListScroll === 0 ? (<div className="sideButtons" />) : (<Prev list="relatedList" scrollPrev={RelatedProducts.scrollPrev} />)}
        {load ? (
          <div className={style.gridContainer0} id="gridContainer0">
            <span className={style.ListName} id="ListNameRelated">RELATED PRODUCTS</span>
            {comparison}
            <List
              productsList={related}
              wishList={wishList}
              compareHandler={this.compareHandler}
              addToWishHandler={this.addToWishHandler}
              dropWishHandler={this.dropWishHandler}
              scrollHandler={this.scrollHandler}
            />
          </div>
        ) : (
          <div />
        )}
        {(relatedListScroll === 1 || related.length < 5) ? (<div className="sideButtons" />) : (<Next list="relatedList" scrollNext={RelatedProducts.scrollNext} />)}
        {outfitListScroll === 0 ? (<div className="sideButtons" />) : (<Prev list="outfitList" scrollPrev={RelatedProducts.scrollPrev} />)}
        {outfitLoad ? (
          <div className={style.gridContainer1} id="gridContainer1">
            <span className={style.ListName} id="ListNameOutfit">YOUR OUTFIT</span>
            <div className={`outfitList ${style.outfitListWithAdd}`} onScroll={this.scrollHandler.bind(this, 'outfitList')}>
              <AddToOutfit
                addToOutfitHandler={this.addToOutfitHandler}
                mouseMove={RelatedProducts.onMouseMove}
              />
              <ListOutfit
                productsList={outfitList}
                dropHandler={this.dropHandler}
              />
            </div>
          </div>
        ) : (
          <div />
        )}
        {(outfitListScroll === 1 || outfitList.length < 4) ? (<div className="sideButtons" />) : (<Next list="outfitList" scrollNext={RelatedProducts.scrollNext} />)}
      </div>
    );
  }
}

RelatedProducts.propTypes = {
  productId: propTypes.number.isRequired,
  interactions: propTypes.func.isRequired,
};

export default RelatedProducts;
