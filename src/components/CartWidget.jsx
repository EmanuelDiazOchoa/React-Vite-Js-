
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
  const itemCount = 3; 

  return (
    <div className="flex items-center text-white">
      <FaShoppingCart className="text-xl" />
      <span className="ml-2">{itemCount}</span>
    </div>
  );
};

export default CartWidget;
