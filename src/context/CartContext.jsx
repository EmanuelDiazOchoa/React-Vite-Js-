import React, { createContext, useContext, useState } from 'react';
import { db } from '../service/firebase';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id 
            ? {...item, quantity: item.quantity + quantity}
            : item
        );
      }
      
      return [...prevItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const item = prevItems.find(item => item.id === productId);
      
      if (item) {
        if (item.quantity > 1) {
          return prevItems.map(item => 
            item.id === productId 
              ? {...item, quantity: item.quantity - 1}
              : item
          );
        } else {
          return prevItems.filter(item => item.id !== productId);
        }
      }
      return prevItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      getCartQuantity,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
}
