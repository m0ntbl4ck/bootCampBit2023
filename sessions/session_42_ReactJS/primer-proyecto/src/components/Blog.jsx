function Blog() {
  const posteo = (
    <div>
      <h1>Hola mundo, este es nuestro primer componente</h1>
      <p>Este es un parrafo cualquiera</p>
    </div>
  );

  return posteo; //el return solo puede retornar una sola cosa si se quiere
  //enviar varios se puede enviar en un div contenedor
}
export default Blog; // exportar el componente que creamos
