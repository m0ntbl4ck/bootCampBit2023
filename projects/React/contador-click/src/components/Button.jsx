import React from "react";
import "../styles/Button.css";
function Buttom({ text, eventClick, isButtonClick }) {
  return (
    <>
      <button
        className={isButtonClick ? "boton-click" : "boton-reiniciar"}
        onClick={eventClick}
      >
        {text}
      </button>
    </>
  );
}

export { Buttom };
