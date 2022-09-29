import React from 'react';
import '../styles/button.css'

function Button({ text, isButtonClick, clickHandler }) {
  return(
    <button 
      className={ isButtonClick ? "click-button" : "reset-button" }
      onClick={clickHandler}>
      {text}
    </button>
  )
}

export default Button;
