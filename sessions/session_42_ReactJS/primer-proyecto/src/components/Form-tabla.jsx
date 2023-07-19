import './Style.css';

function Formtabla() {
  return (
    <div className="container">
      <form action="">
        <label htmlFor="">Ingrese el nombre: </label>

        <input type="text" required placeholder="" />
        <br />
        <br />
        <label htmlFor="">Ingrese el apellido: </label>

        <input type="text" required placeholder="" />
        <br />
        <br />
        <label htmlFor="">Ingrese su edad: </label>

        <input type="number" required minLength={1} maxLength={3} />
        <br />
        <br />
        <label htmlFor="">Ingrese su profesión: </label>

        <input required type="text" name="" id="" />
        <br />
        <br />
        <input className="button" type="submit" value="Enviar" />
      </form>
    </div>
  );
}
export default Formtabla;
