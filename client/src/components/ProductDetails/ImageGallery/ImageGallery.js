/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
import Thumbnail from './Thumbnail';
import css from './ImageGallery.css';

const ImageGallery = ({
  styleId, style, id, leftClick, rightClick, renderDefaultView,
}) => (
  <div className={css.imageGallery} styleid={styleId}>
    {style.photos[id].url !== null ? (
      <DefaultView
        id={id}
        max={style.photos.length}
        leftClick={leftClick}
        rightClick={rightClick}
        url={style.photos[id].url}
      />
    ) : ''}
    <div className={css.thumbnailView}>
      <div className={css.thumbnails}>
        {style.photos.map((thumbnail, i) => {
          let selected = 'notSelected';
          if (parseInt(id, 10) === i) {
            selected = 'selected';
          }
          if (thumbnail.url !== null) {
            return (
              <div key={`${i} ${thumbnail.url.toString()}`}>
                <Thumbnail
                  thmbId={i}
                  url={thumbnail.url}
                  onClick={renderDefaultView}
                  selected={selected}
                />
              </div>
            );
          }
          return '';
        })}
      </div>
      <div className={css.arrow}>
        <span className="fa fa-chevron-down" />
      </div>
    </div>
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
  id: PropTypes.number.isRequired,
  leftClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired,
  renderDefaultView: PropTypes.func.isRequired,
};

export default ImageGallery;
