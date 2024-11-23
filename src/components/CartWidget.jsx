import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import { useNumber } from '../hook/useNumber';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartItems } = useCart();
  const { formatNumber } = useNumber();

  const totalItems = cartItems ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0) : 0;

  return (
    <Link to="/cart">
      <div className="relative">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-white" />
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {formatNumber(totalItems)}
        </span>
      </div>
    </Link>
  );
};

export default CartWidget;

