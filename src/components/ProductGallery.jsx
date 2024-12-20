import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductGallery({products}) {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const [addedToCart, setAddedToCart] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product, 1);
    setAddedToCart(product.id);
    
    setTimeout(() => {
      setAddedToCart(null);
    }, 2000);
  };

  const isProductInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  return (
    <div className="bg-gradient-to-r from-green-200 via-green-400 to-purple-700">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center underline">
          Lista de Productos
        </h2>
        
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 hover:text-purple-600">
                    <Link to={`/item/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gray-700">{product.category}</p>
                  <p className="text-lg font-bold text-purple-800">${product.price}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold shadow-md hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={() => removeFromCart(product.id)}
                    disabled={!isProductInCart(product.id)}
                  >
                    -
                  </button>

                  {isProductInCart(product.id) && (
                    <span className="text-center text-sm font-semibold">
                      {cartItems.find(item => item.id === product.id)?.quantity || 0}
                    </span>
                  )}

                  <button 
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold shadow-md hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    onClick={() => handleAddToCart(product)}
                  >
                    +
                  </button>

                  <Link 
                    to="/cart"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md shadow-md hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                  >
                    Comprar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
