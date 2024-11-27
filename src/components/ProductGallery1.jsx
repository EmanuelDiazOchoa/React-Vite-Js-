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
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className={`flex-1 py-2 px-4 rounded-md transition-colors duration-200 ${
                      addedToCart === product.id 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-purple-600 hover:bg-purple-700'
                    } text-white text-sm`}
                  >
                    {addedToCart === product.id ? '¡Añadido!' : 'Añadir'}
                  </button>

                  <button 
                    onClick={() => removeFromCart(product.id)}
                    className={`flex-1 py-2 px-4 rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors duration-200 text-sm ${
                      !isProductInCart(product.id) ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={!isProductInCart(product.id)}
                  >
                    Eliminar
                  </button>
                </div>

                {isProductInCart(product.id) && (
                  <div className="text-center text-sm text-gray-600">
                    En carrito: {cartItems.find(item => item.id === product.id)?.quantity || 0}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
