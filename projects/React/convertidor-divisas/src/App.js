import "./App.css";
import { Convertidor } from "./components/Convertidor";
import { Button } from "./components/Button";
import { Resultado } from "./components/Resultado";
import { useState } from "react";

function App() {
  const [conversion, setConversion] = useState(0);

  const [numero, setNumero] = useState(1);

  const convertidorCopToUsd = () => {
    console.log("1 COP = 0.00022 USD");
    setConversion(`${numero * 0.00022}`);
  };
  const convertidorUsdToCop = () => {
    console.log("1 USD = 4551.25 COP");
    setConversion(`${numero * 4551.25}`);
  };
  const obtenerNumero = (elemento) => {
    setNumero(elemento.target.value);
  };
  return (
    <>
      <div className="App">
        <Convertidor />
        <input type="number" onChange={obtenerNumero} />

        <Button text="Convertir COP a USD" convertir={convertidorCopToUsd} />
        <Button text="Convertir USD a COP" convertir={convertidorUsdToCop} />
        <Resultado mostrar={conversion} />
      </div>
    </>
  );
}

export default App;
