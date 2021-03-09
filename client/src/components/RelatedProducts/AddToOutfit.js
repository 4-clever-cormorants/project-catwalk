import React from 'react';
import propTypes from 'prop-types';
import style from './css/list.css';

// TODO: add eventListener to add current product to state
const AddToOutfit = ({ addToOutfitHandler }) => (
  // eslint-disable-next-line object-curly-spacing
  <div className={style.addToOutfit} onClick={addToOutfitHandler} role="button" onKeyPress={addToOutfitHandler} tabIndex={0}>
    <span className={style.addToOutfitText} id="addToOutfit">
      ADD TO OUTFIT
    </span>
    <span className={`${style.addToOutfitText} fa fa-plus`} id="addToOutfitButton" />
  </div>
);

AddToOutfit.propTypes = {
  addToOutfitHandler: propTypes.func.isRequired,
};

export default AddToOutfit;
