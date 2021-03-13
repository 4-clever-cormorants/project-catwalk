/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInformation from './ProductInformation/ProductInformation';
import StyleSelector from './StyleSelector/StyleSelector';
import Checkout from './Checkout/Checkout';
import StickyHeader from './StickyHeader/StickyHeader';

import css from './ProductDetails.css';

class ProductDetails extends React.Component {
  static onMouseMove(e) {
    const addToCart = document.querySelector('#addToCart');
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addToCart.style.setProperty('--x', `${x}px`);
    addToCart.style.setProperty('--y', `${y}px`);
  }

  constructor(props) {
    super(props);
    this.state = {
      product: null,
      styleId: null,
      styles: null,
      style: null,
      rating: null,
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
    const { productId, getProductName, interactions } = this.props;
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
    document.addEventListener('keydown', this.escFunction, false);
    const pdComponent = document.querySelector('#PD');
    if (pdComponent) {
      pdComponent.addEventListener('click',
        (e) => interactions(e, 'ProductDetails'));
    }
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
    const { sku } = this.state;
    if (sku !== null) {
      const body = {
        sku_id: sku,
      };

      axios.post('/cart', body)
        .then(() => {
          axios.get('/cart')
            .then((crt) => {
              this.setState({
                cart: crt.data,
              });
            })
            .catch((err) => {
              console.error(err);
            });
        })
        .catch((err) => {
          console.error(err);
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

  renderDefaultView(e) {
    const { style } = this.state;
    return (
      style.photos[e.target.id] !== undefined
        ? this.setState({
          id: e.target.id,
        }) : ''
    );
  }

  render() {
    const {
      product, rating, styleId, styles, style, id, sku, load,
    } = this.state;
    return (
      <div id={css.PD} className={css.PD}>
        {load ? (
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
              rating={rating}
              originalPrice={style.original_price}
              salePrice={style.sale_price}
            />
            <StyleSelector
              styles={styles.results}
              selected={style.name}
              styleSelector={this.styleSelector}
            />
            <Checkout
              productId={product.id}
              skuSelector={this.skuSelector}
              addToCart={this.addToCart}
              onMouseMove={ProductDetails.onMouseMove}
              style={style}
              sku={sku}
            />
          </div>
        ) : ''}
        {load ? (
          <StickyHeader
            product={product}
            style={style}
            sku={sku}
            onMouseMove={ProductDetails.onMouseMove}
          />
        ) : (
          <i className={`${css.load} fa fa-spinner fa-pulse fa-2x`} />
        )}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productId: PropTypes.number.isRequired,
  getProductName: PropTypes.func.isRequired,
  interactions: PropTypes.func.isRequired,
};

export default ProductDetails;
