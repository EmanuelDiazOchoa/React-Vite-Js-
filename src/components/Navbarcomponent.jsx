import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-t from-purple-200 via-purple-400 to-purple-800 p-6 fixed top-0 left-0 right-0 z-10 font-josefin">
            <div className="container mx-auto">
                {/* Versión Desktop y Mobile */}
                <div className="flex justify-between items-center">
                    <Link className="text-white text-3xl font-bold" to="/">Salem</Link>
                    
                    {/* Botón hamburguesa - Solo visible en mobile */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white hover:text-purple-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Links de navegación - Visibles en desktop */}
                    <div className="hidden lg:flex space-x-10">
                        <Link className="text-white hover:underline" to="/categoria/sahumerios">Sahumerio</Link>  
                        <Link className="text-white hover:underline" to="/categoria/velas">Velas Aromáticas</Link>    
                        <Link className="text-white hover:underline" to="/categoria/perfumes">Perfumes Aromáticos</Link> 
                    </div>

                    {/* CartWidget - Visible en desktop */}
                    <div className="hidden lg:block">
                        <CartWidget />
                    </div>
                </div>

                {/* Menú mobile - Solo visible cuando isOpen es true */}
                <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} pt-4`}>
                    <div className="flex flex-col space-y-4">
                        <Link 
                            className="text-white hover:underline text-center" 
                            to="/categoria/sahumerios"
                            onClick={() => setIsOpen(false)}
                        >
                            Sahumerio
                        </Link>  
                        <Link 
                            className="text-white hover:underline text-center" 
                            to="/categoria/velas"
                            onClick={() => setIsOpen(false)}
                        >
                            Velas Aromáticas
                        </Link>    
                        <Link 
                            className="text-white hover:underline text-center" 
                            to="/categoria/perfumes"
                            onClick={() => setIsOpen(false)}
                        >
                            Perfumes Aromáticos
                        </Link>
                        {/* CartWidget en menú mobile */}
                        <div className="flex justify-center">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;









