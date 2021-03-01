import React from 'react';
import propTypes from 'prop-types';

const List = ({ className }) => (
  <div className={className}>
    List
  </div>
);

List.propTypes = {
  className: propTypes.string.isRequired,
};

export default List;
