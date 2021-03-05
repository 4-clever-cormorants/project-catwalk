import React from 'react';
import propTypes from 'prop-types';
import style from './css/list.css';

// TODO: add eventListener to add current product to state
const AddToOutfit = ({ addToOutfitHandler }) => (
  // eslint-disable-next-line object-curly-spacing
  <div className={style.addToOutfit}>
    <span className={style.addToOutfitText} id="addToOutfit">
      AddToOutfit
    </span>
    <button className={style.addToOutfitButton} type="button" id="addToOutfitButton" onClick={addToOutfitHandler}>+</button>
  </div>
);

AddToOutfit.propTypes = {
  addToOutfitHandler: propTypes.func.isRequired,
};

export default AddToOutfit;
