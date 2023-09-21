import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Tu Tienda de Productos para el Cuidado de la Piel</h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
        <li>
          <Link to="/carrito">Carrito</Link>
        </li>
      </ul>
      <div className="navbar-products">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/producto/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
