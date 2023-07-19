import './Style.css';
function Table() {
  const personas = [
    {
      numero: 1,
      nombre: 'Brandon',
      apellido: 'Vergara',
      edad: '26',
      profesion: 'Desarrollador Front-end',
    },

    {
      numero: 2,
      nombre: 'Andrea',
      apellido: 'Vergara',
      edad: '32',
      profesion: 'Contadora',
    },
    {
      numero: 3,
      nombre: 'Sergio',
      apellido: 'Vergara',
      edad: '33',
      profesion: 'Independiente',
    },
    {
      numero: 4,
      nombre: 'Gloria',
      apellido: 'Montenegro',
      edad: '57',
      profesion: 'Asistente de ventas',
    },
    {
      numero: 5,
      nombre: 'Orlando',
      apellido: 'Vergara',
      edad: '56',
      profesion: 'Entrenador Deportivo',
    },
  ];

  return (
    <div className="container">
      <h4 className="titulo">Listado de personas</h4>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Profesión</th>
          </tr>
        </thead>
        <tbody>
          {personas.map((personas) => (
            <tr key={personas.numero}>
              <td>{personas.numero}</td>
              <td>{personas.nombre}</td>
              <td>{personas.apellido}</td>
              <td>{personas.edad}</td>
              <td>{personas.profesion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
