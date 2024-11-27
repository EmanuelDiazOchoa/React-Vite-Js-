import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import { useNumber } from '../hook/useNumber';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { getCartQuantity } = useCart();
  const { formatNumber } = useNumber();

  const totalItems = getCartQuantity();

  return (
    <Link to="/cart" className="relative inline-block">
      <div className="relative">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" className="text-white" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {formatNumber(totalItems)}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartWidget;

