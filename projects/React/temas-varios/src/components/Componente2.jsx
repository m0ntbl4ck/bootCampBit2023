import { useState, useEffect } from "react";
import { Item } from "./Item";

function Componente2() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((data) => setUsuarios(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div>
        <ul>
          {usuarios.map((user, index) => {
            return <Item key={index} nombre={user.name} />;
          })}
        </ul>
      </div>
    </>
  );
}

export { Componente2 };
