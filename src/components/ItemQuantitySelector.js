import React, { useState } from 'react';

function ItemQuantitySelector({ initialQuantity, onQuantityChange }) {
  const [quantity, setQuantity] = useState(initialQuantity || 1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="item-quantity-selector">
      <button onClick={handleDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default ItemQuantitySelector;
