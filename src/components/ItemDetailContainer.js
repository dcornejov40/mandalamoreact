import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import ItemDetail from './ItemDetail';
import products from '../data/products'; 

function ItemDetailContainer() {
  const { productId } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    const selectedProduct = products.find((p) => p.id === parseInt(productId, 10));

    
    if (selectedProduct) {
      setProduct(selectedProduct);
    }
  }, [productId]); 

  return (
    <div className="item-detail-container">
      <h2>Detalles del Producto</h2>
      {product ? (
        <ItemDetail product={product} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
