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
      load: false,
    };
    this.styleSelector = this.styleSelector.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    axios.get(`/products/data?product_id=${productId}`)
      .then((res) => {
        const product = res.data;
        axios.get(`/products/styles?product_id=${productId}`)
          .then((response) => {
            this.setState({
              product,
              styleId: response.data.results[0].style_id,
              styles: response.data,
              style: response.data.results[0],
              defaultSku: Object.keys(response.data.results[0].skus)[0],
              load: true,
            });
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  styleSelector(e) { // fix this
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
      product, styleId, styles, style, defaultSku, load,
    } = this.state;

    return (
      <div>
        { load ? (
          <div className="productDetails">
            <ImageGallery styleId={styleId} style={style} name={product.name} />
            <ProductInformation product={product} />
            <StyleSelector
              styles={styles.results}
              styleSelector={this.styleSelector}
              style={style}
              defaultSku={defaultSku}
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
