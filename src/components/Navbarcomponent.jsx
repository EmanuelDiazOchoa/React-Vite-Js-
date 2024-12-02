import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-t from-purple-200 via-purple-400 to-purple-800 p-6 fixed top-0 left-0 right-0 z-10 font-josefin">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-white text-3xl font-bold" to="/">Salem</Link>  
                
                <div className="hidden md:flex space-x-10">
                    <Link className="text-white hover:underline" to="/categoria/sahumerios">Sahumerio</Link>  
                    <Link className="text-white hover:underline" to="/categoria/velas">Velas Aromáticas</Link>    
                    <Link className="text-white hover:underline" to="/categoria/perfumes">Perfumes Aromáticos</Link> 
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                <CartWidget />
            </div>

            
            {isMenuOpen && (
                <div className="md:hidden bg-gradient-to-t from-purple-200 via-purple-400 to-purple-800 p-4">
                    <Link className="block text-white hover:underline" to="/categoria/sahumerios">Sahumerio</Link>
                    <Link className="block text-white hover:underline" to="/categoria/velas">Velas Aromáticas</Link>
                    <Link className="block text-white hover:underline" to="/categoria/perfumes">Perfumes Aromáticos</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;









