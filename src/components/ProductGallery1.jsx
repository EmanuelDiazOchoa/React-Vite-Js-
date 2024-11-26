import React from 'react';
import '../styles/tailwind.css';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';


export default function ProductGallery1({products}) {
  const { addToCart } = useCart();

  return (
    <div className="bg-gradient-to-r from-green-200 via-green-400 to-purple-700">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center underline">Lista de Productos</h2>
        
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 hover:text-purple-600">
                    <Link to={"/item/"+product.id}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gray-700">{product.color}</p>
                  <p className="text-lg font-bold text-purple-800">${product.price}</p>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
