import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a className="text-white text-xl font-bold" href="#">Salem</a>
        <div className="flex space-x-4">
          <a className="text-white hover:underline" href="#">Categoría 1</a>
          <a className="text-white hover:underline" href="#">Categoría 2</a>
          <a className="text-white hover:underline" href="#">Categoría 3</a>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;


