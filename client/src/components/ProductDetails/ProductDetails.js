import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import ImageGallery from './ImageGallery/ImageGallery';
import ProductInformation from './ProductInformation/ProductInformation';
import StyleSelector from './StyleSelector/StyleSelector';

import defaultProduct from './productDummyData';
import defaultStyles from './stylesDummyData';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: defaultProduct,
      styleId: 76285,
      styles: defaultStyles,
      style: defaultStyles.results[0],
      defaultSku: Object.keys(defaultStyles.results[0].skus)[0],
    };
    this.styleSelector = this.styleSelector.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    axios.get(`/products/data?product_id=${productId}`)
      .then((res) => {
        this.setState({
          product: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
    axios.get(`/products/styles?product_id=${productId}`)
      .then((res) => {
        this.setState({
          styles: res.data,
          style: res.data.results[0],
        });
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
          defaultSku: Object.keys(style.skus)[0],
        });
      }
    });
  }

  render() {
    const {
      product, styleId, styles, style, defaultSku,
    } = this.state;

    return (
      <div className="productDetails">
        <h1>ProductDetails</h1>
        <ImageGallery styleId={styleId} style={style} />
        <ProductInformation product={product} />
        <StyleSelector
          styles={styles.results}
          styleSelector={this.styleSelector}
          style={style}
          defaultSku={defaultSku}
        />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default ProductDetails;
