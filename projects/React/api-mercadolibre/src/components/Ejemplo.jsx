import { useState, useEffect } from "react";
/* import { Button } from "./Button"; */

function Ejemplo() {
  const [productos, setProductos] = useState([]);
  const [detalles, setDetalles] = useState([]);
  const [input, setInput] = useState([]);

  const Buscar = (element) => {
    setInput(element.target.value);
  };

  useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${input}`)
      .then((Response) => Response.json())
      .then((products) => {
        console.log(products.results);
        setProductos(products.results);
      });
  }, [input]);

  return (
    <>
      <div className="container mb-5">
        <h3 className="text-lg-center">Filtrar Articulos</h3>

        <input className="input" onChange={Buscar} type="text" />
      </div>
      <article className="container row">
        <section className="container mt-5 col">
          <table className="table table table-striped text-center">
            <thead>
              <th>ID</th>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Acciones</th>
            </thead>
            <tbody>
              {productos.map((p, index) => {
                return (
                  <tr key={index}>
                    <td>{p.id}</td>
                    <td>
                      <img src={p.thumbnail} alt="Imagen del producto" />
                    </td>
                    <td>{p.title}</td>
                    <td>
                      {p.currency_id} {p.price}
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          setDetalles(p);
                        }}
                      >
                        Mostrar Detalles
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
        <section className="container col">
          <div>
            <h3>{detalles.title}</h3>
            <img src={detalles.thumbnail} alt="Imagen del producto" />
            <p>
              {detalles.currency_id} {detalles.price}
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
export { Ejemplo };
