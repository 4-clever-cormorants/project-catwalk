import React from 'react';
import PropTypes from 'prop-types';

class DefaultView extends React.Component {
  constructor({ url }) {
    super({ url });
  }

  render() {
    return (
      <div>
        default view
        <img src={this.url} alt="" />
      </div>
    );
  }
}

DefaultView.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DefaultView;
