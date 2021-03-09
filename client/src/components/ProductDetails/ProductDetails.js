import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInformation from './ProductInformation/ProductInformation';
import StyleSelector from './StyleSelector/StyleSelector';
import Checkout from './Checkout/Checkout';

import css from './ProductDetails.css';

class ProductDetails extends React.Component {
  static scrollUp() {
    const scroll = document.getElementById('thumbnailView');
    const currentScroll = scroll.scrollTop;
    if (currentScroll - 475 < 0) {
      scroll.scrollTop = 0;
    } else {
      scroll.scrollTop = Math.floor((currentScroll - (475)) / 115) * 115;
    }
  }

  static scrollDown() {
    const scroll = document.getElementById('thumbnailView');
    const scrollMax = scroll.scrollHeight - scroll.clientHeight;
    const currentScroll = scroll.scrollTop;

    if (currentScroll + (475) > scrollMax) {
      scroll.scrollTop = scrollMax;
    } else {
      scroll.scrollTop = Math.floor((currentScroll + (475)) / 115) * 115;
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      product: null,
      styleId: null,
      styles: null,
      style: null,
      id: null,
      sku: null,
      cart: [],
      load: false,
    };
    this.styleSelector = this.styleSelector.bind(this);
    this.skuSelector = this.skuSelector.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.renderDefaultView = this.renderDefaultView.bind(this);
  }

  componentDidMount() {
    const { productId, getProductName } = this.props;
    axios.get(`/products/data?product_id=${productId}`)
      .then((prod) => {
        const product = prod.data;
        axios.get(`/rating/data?product_id=${productId}`)
          .then((rtng) => {
            const rating = rtng.data;
            axios.get(`/products/styles?product_id=${productId}`)
              .then((response) => {
                this.setState({
                  product,
                  rating,
                  styleId: response.data.results[0].style_id,
                  styles: response.data,
                  style: response.data.results[0],
                  id: 0,
                  load: true,
                },
                () => { getProductName(product.name); });
              });
          });
      })
      .catch((err) => {
        throw (err);
      });
  }

  styleSelector(e) {
    const styleId = parseInt(e.target.classList[0], 10);
    if (!Number.isNaN(styleId)) {
      const { styles } = this.state;
      this.setState({
        styleId,
      });
      styles.results.forEach((style) => {
        if (style.style_id === styleId) {
          this.setState({
            style,
            id: 0,
            sku: null,
          });
        }
      });
    }
  }

  skuSelector(e) {
    this.setState({
      sku: e.target.value,
    });
  }

  addToCart(e) {
    e.preventDefault();
    const { cart, sku } = this.state;
    if (cart.indexOf(sku) === -1) {
      this.setState({
        cart: [...cart, sku],
      });
    }
  }

  leftClick() {
    const { id } = this.state;
    if (id > 0) {
      this.setState({
        id: parseInt(id, 10) - 1,
      });
    }
  }

  rightClick() {
    const { id, style } = this.state;
    if (id < style.photos.length - 1) {
      this.setState({
        id: parseInt(id, 10) + 1,
      });
    }
  }

  scrollHandler() {
    const scroll = document.getElementById('thumbnailView');
    const scrollMax = scroll.scrollHeight - scroll.clientHeight;
    const currentScroll = scroll.scrollTop;
    const { thumbnailScroll } = this.state;
    let index;
    if (currentScroll === scrollMax) {
      index = 1;
    }
    if (currentScroll === 0) {
      index = 0;
    }
    if (index !== thumbnailScroll) {
      this.setState({
        thumbnailScroll: index,
      });
    }
  }

  renderDefaultView(e) {
    this.setState({
      id: e.target.id,
    });
  }

  render() {
    const {
      product, rating, styleId, styles, style, id, sku, load,
    } = this.state;

    return (
      <div className={css.PD}>
        <h1> Website Header </h1>
        { load ? (
          <div className={css.productDetails}>
            <ImageGallery
              styleId={styleId}
              style={style}
              id={parseInt(id, 10)}
              leftClick={this.leftClick}
              rightClick={this.rightClick}
              renderDefaultView={this.renderDefaultView}
            />
            <ProductInformation
              product={product}
              rating={rating.average}
              totalRatings={rating.ratings}
              originalPrice={style.original_price}
              salePrice={style.sale_price}
            />
            <StyleSelector
              styles={styles.results}
              selected={style.name}
              styleSelector={this.styleSelector}
            />
            <Checkout
              skuSelector={this.skuSelector}
              addToCart={this.addToCart}
              style={style}
              sku={sku}
            />
          </div>
        ) : ''}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productId: PropTypes.number.isRequired,
  getProductName: PropTypes.func.isRequired,
};

export default ProductDetails;
