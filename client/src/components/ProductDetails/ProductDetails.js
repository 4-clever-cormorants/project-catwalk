import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInformation from './ProductInformation/ProductInformation';
import StyleSelector from './StyleSelector/StyleSelector';
import Checkout from './Checkout/Checkout';

import css from './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      styleId: null,
      styles: null,
      style: null,
      sku: null,
      cart: [],
      load: false,
    };
    this.styleSelector = this.styleSelector.bind(this);
    this.skuSelector = this.skuSelector.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    axios.get(`/products/data?product_id=${productId}`)
      .then((prod) => {
        const product = prod.data;
        axios.get(`/rating/data?product_id=${productId}`)
          .then((rtng) => {
            const rating = rtng.data.average;
            axios.get(`/products/styles?product_id=${productId}`)
              .then((response) => {
                this.setState({
                  product,
                  rating,
                  styleId: response.data.results[0].style_id,
                  styles: response.data,
                  style: response.data.results[0],
                  sku: Object.keys(response.data.results[0].skus)[0],
                  load: true,
                });
              });
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  styleSelector(e) {
    // when you click on the style image in StylesDisplay,
    // update the state with that style id and style
    const styleId = Number(e.target.classList[0]);
    const { styles } = this.state;
    this.setState({
      styleId,
    });
    styles.results.forEach((style) => {
      if (style.style_id === styleId) {
        this.setState({
          style,
          sku: Object.keys(style.skus)[0],
        });
      }
    });
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

  render() {
    const {
      product, rating, styleId, styles, style, sku, load,
    } = this.state;

    return (
      <div className="PD">
        { load ? (
          <div className={css.productDetails}>
            <ImageGallery
              styleId={styleId}
              style={style}
              styles={styles.results}
              styleSelector={this.styleSelector}
            />
            <ProductInformation
              product={product}
              rating={rating}
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
};

export default ProductDetails;
