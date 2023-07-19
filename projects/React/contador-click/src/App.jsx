import "./App.css";
import React from "react";
import { Buttom } from "./components/Button";
import { Count } from "./components/Count";
import { useState } from "react"; // manejar estados de los componentes
function App() {
  //Manejo del estado del componente

  const [click, setClick] = useState(0);

  const [fruta, setFruta] = useState("Banana");
  const eventoCLick = () => {
    console.log("click en el boton");
    setClick(click + 1);

    setFruta("Manzana");
    console.log("El state fruta es: " + fruta);
  };

  const resetClick = () => {
    console.log("Reiniciar Click");

    setClick(0);

    setFruta("Limon");
    console.log("El state fruta es: " + fruta);
  };

  const [texto, setTexto] = useState("ingrese un texto");

  const cambiarTexto = (elemento) => {
    console.log(elemento.target.value);
    setTexto(elemento.target.value);
  };

  return (
    <>
      <article className="App">
        <h1>Contador de Click</h1>
        <Count numClicks={click} />
        <Buttom text="Click" eventClick={eventoCLick} isButtonClick={false} />

        <Buttom text="Reiniciar" eventClick={resetClick} isButtonClick={true} />
        <hr />
        <input type="text" onChange={cambiarTexto} />
        <h1>{texto}</h1>
      </article>
    </>
  );
}

export default App;
