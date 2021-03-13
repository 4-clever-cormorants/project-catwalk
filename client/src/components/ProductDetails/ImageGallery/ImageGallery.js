/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import DefaultView from './DefaultView';
import Thumbnail from './Thumbnail';
import Up from './Up';
import Down from './Down';
import css from './ImageGallery.css';

class ImageGallery extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
    };
  }

  render() {
    const {
      styleId,
      style,
      id,
      leftClick,
      rightClick,
      renderDefaultView,
      onScroll,
      scrollUp,
      scrollDown,
      thumbnailScroll,
    } = this.props;
    return (
      <div id="imageGallery" className={css.imageGallery} styleid={styleId}>
        {style.photos[id].url !== null ? (
          <DefaultView
            id={id}
            max={style.photos.length}
            leftClick={leftClick}
            rightClick={rightClick}
            url={style.photos[id].url}
          />
        ) : ''}
        <div id="ThumbnailViewContainer" className={css.TV}>
          {thumbnailScroll === 0 ? (<div />) : (<Up scrollUp={scrollUp} />)}
          <div className={css.thumbnailView}>
            <div id="thumbnailView" className={css.thumbnails} onScroll={onScroll}>
              {style.photos.map((thumbnail, i) => {
                let selected = 'notSelected';
                if (parseInt(id, 10) === i) {
                  selected = 'selected';
                }
                if (thumbnail.url !== null) {
                  return (
                    <div id="thumbnailPhoto" key={`${i} ${thumbnail.url.toString()}`}>
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
          </div>
          {(thumbnailScroll === 1 || style.photos.length < 5)
            ? (<div />) : (<Down scrollDown={scrollDown} />)}
        </div>
      </div>
    );
  }
}

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
  onScroll: PropTypes.func.isRequired,
  scrollUp: PropTypes.func.isRequired,
  scrollDown: PropTypes.func.isRequired,
  thumbnailScroll: PropTypes.number,
};

ImageGallery.defaultProps = {
  thumbnailScroll: null,
};

export default ImageGallery;
