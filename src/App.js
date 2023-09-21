import React from 'react';
import Description from './Description'; // Asegúrate de que la ruta sea correcta

import products from './data/products'; // Importa los datos de los productos

function App() {
  return (
    <div>
      {products.map((product) => (
        <Description key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
