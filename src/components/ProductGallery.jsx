import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductGallery1({products}) {
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
                    className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
                    onClick={() => removeFromCart(product.id)}
                    disabled={!isProductInCart(product.id)}
                  >
                    -
                  </button>

                  {isProductInCart(product.id) && (
                    <span className="text-center text-sm">
                      {cartItems.find(item => item.id === product.id)?.quantity || 0}
                    </span>
                  )}

                  <button 
                    className="w-8 h-8 rounded-full bg-green-500 text-white hover:bg-green-600"
                    onClick={() => handleAddToCart(product)}
                  >
                    +
                  </button>

                  <Link 
                    to="/cart"
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
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
