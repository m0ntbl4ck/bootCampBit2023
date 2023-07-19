import { useState, useEffect } from "react";
function Componente1() {
  const [dato, setDato] = useState();
  const [num, setNum] = useState(0);

  const miFunction = () => {
    setDato("hola como estan? " + num);
    setNum(num + 1);
  };

  useEffect(() => {
    console.log("Rederizando componente");
  }, [dato]);

  return (
    <>
      <h2>{dato}</h2>
      <button onClick={miFunction}>Click</button>
    </>
  );
}
export { Componente1 };
