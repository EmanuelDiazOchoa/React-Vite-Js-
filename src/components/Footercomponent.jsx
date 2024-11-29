import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-purple-800 via-purple-400 to-purple-200 p-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Columna 1 - Información de la tienda */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold mb-4">Salem</h3>
                        <p className="mb-2">Tu tienda de productos esotéricos</p>
                        <p className="mb-2">Dirección: Calle Principal 123</p>
                        <p>Teléfono: (123) 456-7890</p>
                    </div>

                    {/* Columna 3 - Redes sociales */}
                    <div className="text-center md:text-right">
                        <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-8 pt-4 border-t border-purple-700">
                    <p>&copy; {new Date().getFullYear()} Salem. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

