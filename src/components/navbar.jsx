import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget'; 

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-t from-purple-200 via-purple-400 to-purple-800 p-6 fixed top-0 left-0 right-0 z-10 font-josefin">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-white text-3xl font-bold" to="/">Salem</Link>  
                
                <div className="flex space-x-10">
                    <Link className="text-white hover:underline" to="/productos/1">Sahumerio</Link>  
                    <Link className="text-white hover:underline" to="/productos/2">Velas Aromáticas</Link>    
                    <Link className="text-white hover:underline" to="/productos/3">Perfumes Aromáticos</Link> 
                </div>
                
                <CartWidget />
            </div>
        </nav>
    );
};

export default Navbar;









