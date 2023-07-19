import "./App.css";
import { Title } from "../components/Title";
import { InputHigh } from "../components/InputHigh";
import { InputWigth } from "../components/InputWigth";
import { Button } from "../components/Button";
import { Result } from "../components/Result";
import { useState } from "react";
function App() {
  const [alto, setAlto] = useState(0);
  const [ancho, setAncho] = useState(0);
  const [area, setArea] = useState(0);
  const obtenerAlto = (elemento) => {
    setAlto(elemento.target.value);
    console.log(elemento.target.value);
  };
  const obtenerAncho = (element) => {
    setAncho(element.target.value);
    console.log(element.target.value);
  };

  const calcularArea = () => {
    setArea(`${alto * ancho}`);
  };
  return (
    <>
      <div className="App">
        <Title text="Calcular el Area de un Rectangulo" />
        <InputHigh
          text="Ingrese el alto del rectangulo"
          obtener={obtenerAlto}
        />
        <br />
        <InputWigth
          text="Ingrese el ancho del rectangulo"
          obtener={obtenerAncho}
        />
        <h1>el alto es: {alto}</h1>
        <h1>El ancho es: {ancho}</h1>
        <br />
        <Button text="Calcular" calcular={calcularArea} /> <br />
        <Result text={area} />
      </div>
    </>
  );
}

export default App;
