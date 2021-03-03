import React from 'react';
import propTypes from 'prop-types';

const Drop = ({ id, dropHandler }) => (
  // eslint-disable-next-line object-curly-spacing
  <div className="actionIconDrop" onClick={dropHandler.bind(this, id)} onKeyPress={dropHandler.bind(this, id)} role="button" tabIndex={0}>
    Drop
  </div>
);

Drop.propTypes = {
  dropHandler: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};

export default Drop;
