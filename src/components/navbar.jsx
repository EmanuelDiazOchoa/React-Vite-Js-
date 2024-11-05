import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from './CartWidget'; 

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 fixed top-0 left-0 right-0 z-10">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-white text-xl font-bold" to="/">Salem</Link>
                <div className="flex space-x-4">
                    <Link className="text-white hover:underline" to="/category/sahumerio">Sahumerio</Link>
                    <Link className="text-white hover:underline" to="/category/velas">Velas Aromática</Link>
                    <Link className="text-white hover:underline" to="/category/perfumes">Perfumes Aromáticas</Link>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;






