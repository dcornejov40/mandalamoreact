import React from 'react';
import ReactDOM from 'react-dom';
import '../public/estilos.css';
import App from './App';
import products from './data/products'; // Importa la lista de productos

ReactDOM.render(
  <React.StrictMode>
    <App products={products} />
  </React.StrictMode>,
  document.getElementById('root')
);
