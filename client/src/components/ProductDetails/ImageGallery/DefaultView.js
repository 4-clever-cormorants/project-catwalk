import React from 'react';
import PropTypes from 'prop-types';

import DefaultViewModal from './DefaultViewModal';

import css from './ImageGallery.css';

class DefaultView extends React.Component {
  static onMouseMove(e) {
    const defaultImage = document.querySelector('#defaultImage');
    // const rect = e.target.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;
    defaultImage.style.setProperty('transform-origin', `${((x - defaultImage.offsetLeft) / defaultImage.width) * 100}% ${((y - defaultImage.offsetTop) / defaultImage.height) * 100}%`);
  }

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.exitModal = this.exitModal.bind(this);
  }

  exitModal() {
    this.setState({
      clicked: false,
    });
  }

  render() {
    const {
      id, max, leftClick, rightClick, url,
    } = this.props;
    const { clicked } = this.state;
    return (
      <div id="defaultView" className={css.DV}>
        <div id="scrollLeft" className={css.left}>
          {id > 0 ? (
            <button id="defaultViewLeftButton" type="button" onClick={leftClick} onKeyPress={leftClick} className="fa fa-chevron-left" aria-label="button" />
          ) : ''}
        </div>
        <div
          id={url}
          className={css.defaultView}
          onClick={() => {
            this.setState({
              clicked: true,
            });
          }}
          onFocus={() => {}}
          onKeyPress={() => {}}
          role="button"
          tabIndex={0}
        >
          <img id="defaultImage" src={url} alt="" loading="lazy" onMouseMove={DefaultView.onMouseMove} />
        </div>
        <div className={css.right}>
          {id < max - 1 ? (
            <button id="defaultViewRightButton" type="button" onClick={rightClick} onKeyPress={rightClick} className="fa fa-chevron-right" aria-label="button" />
          ) : ''}
        </div>
        <DefaultViewModal url={url} imageClicked={clicked} exitModal={this.exitModal} />
      </div>
    );
  }
}

DefaultView.propTypes = {
  id: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  leftClick: PropTypes.func.isRequired,
  rightClick: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default DefaultView;
