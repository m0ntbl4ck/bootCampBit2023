//Creamos nuestro componente llamado menu
import './Style.css';
function Menu() {
  const menu = (
    <nav className="menu">
      <a href="#" className="menu">
        Crear
      </a>
      <a href="#" className="menu">
        listado
      </a>
      <a href="#" className="menu">
        Salir
      </a>
    </nav>
  );
  return menu;
}

export default Menu;
