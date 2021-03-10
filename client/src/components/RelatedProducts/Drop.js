import React from 'react';
import propTypes from 'prop-types';
import style from './css/actionIcon.css';

const Drop = ({ id, dropHandler }) => (
  <div className={`actionIconContainer ${style.actionIconDrop}`} onClick={dropHandler.bind(this, id)} onKeyPress={dropHandler.bind(this, id)} role="button" tabIndex={0}>
    <i className={`DropIcon ${style.drop} far fa-times-circle`} />
  </div>
);

Drop.propTypes = {
  dropHandler: propTypes.func.isRequired,
  id: propTypes.number.isRequired,
};

export default Drop;
