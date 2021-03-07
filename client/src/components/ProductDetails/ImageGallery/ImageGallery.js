/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
import Thumbnail from './Thumbnail';
import css from './ImageGallery.css';

const ImageGallery = ({
  styleId, style,
}) => {
  const [photo, photos] = [style.photos[0], style.photos.slice(1)];
  console.log(photo, 'photos', ...photos);
  return (
    <div className={css.imageGallery} styleid={styleId}>
      <DefaultView url={style.photos[0].url} />
      <div className={css.thumbnailView}>
        <span className="fa fa-chevron-up" />
        <div className={css.thumbnails}>
          {console.log(photo.url.toString())}
          <div key={`first ${photo.url.toString()}`}>
            <Thumbnail url={photo.url} defaultChecked />
          </div>
          {photos.map((thumbnail, i) => {
            console.log('t', thumbnail)
            return (
              <div key={`${i} ${thumbnail.url.toString()}`}>
                <Thumbnail url={thumbnail.url} />
              </div>
            )}

          )}
        </div>
        <span className="fa fa-chevron-down" />
      </div>
    </div>
  );
};

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
};

export default ImageGallery;
