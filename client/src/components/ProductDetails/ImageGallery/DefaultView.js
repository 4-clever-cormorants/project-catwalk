import React from 'react';
import PropTypes from 'prop-types';

const DefaultView = ({ url }) => (
  <div className="defaultView">
    <img src={url} alt="" />
  </div>
);

DefaultView.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DefaultView;
