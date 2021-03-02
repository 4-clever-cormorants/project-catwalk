import React from 'react';
import propTypes from 'prop-types';

// TODO: add eventListener to add current product to state
const AddToOutfit = ({ addToOutfitHandler }) => (
  // eslint-disable-next-line object-curly-spacing
  <div className="addToOutfit" id="addToOutfit" style={{border: 'solid'}}>
    AddToOutfit
    <button type="button" id="addToOutfitButton" onClick={addToOutfitHandler}>+</button>
  </div>
);

AddToOutfit.propTypes = {
  addToOutfitHandler: propTypes.func.isRequired,
};

export default AddToOutfit;
