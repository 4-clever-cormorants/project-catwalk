import React from 'react';

class DefaultView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // image
      image: 'image',
    };
  }

  render() {
    return (
      <div>
        <div>
          {this.state.image}
        </div>
      </div>
    );
  }
}

export default DefaultView;
