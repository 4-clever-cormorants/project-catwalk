import React from 'react';
import DefaultView from './DefaultView';
import Thumbnail

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // add image data here
    };
  }

  render() {
    return (
      <div className="imageGallery">
        image gallery
        <DefaultView />
      </div>
    );
  }
}

export default ImageGallery;
