import React from 'react'; 
import CartWidget from './CartWidget'; 

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">Brand Name</h1>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:underline">Categoría 1</a>
          <a href="#" className="text-white hover:underline">Categoría 2</a>
          <a href="#" className="text-white hover:underline">Categoría 3</a>
        </div>
        <CartWidget /> {}
      </div>
    </nav>
  );
};

export default Navbar;


