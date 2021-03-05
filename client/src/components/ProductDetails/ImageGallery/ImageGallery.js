import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
// import ThumbnailView from './ThumbnailView';
import css from './ImageGallery.css';

const ImageGallery = ({ styleId, style, name }) => (
  <div className={css.imageGallery} styleid={styleId}>
    {/* <div className="name">
      <h2>{ name }</h2>
    </div> */}
    <DefaultView url={style.photos[0].url} />
    {/* {style.photos.map((photo) => (
      <div className="thumbnailView" key={photo.thumbnail_url.toString()}>
        <ThumbnailView thumbnailUrl={photo.thumbnail_url} />
      </div>
    ))} */}
  </div>
);

ImageGallery.propTypes = {
  style: PropTypes.shape({
    style_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    original_price: PropTypes.string.isRequired,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool.isRequired,
    photos: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    skus: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  styleId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default ImageGallery;
