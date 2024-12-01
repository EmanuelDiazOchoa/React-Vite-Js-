import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faMapMarkerAlt, 
    faPhone, 
    faEnvelope,
    faStore 
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebook,
    faInstagram,
    faWhatsapp,
    faTiktok
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-t from-purple-800 via-purple-400 to-purple-200 p-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Columna 1 - Información de la tienda */}
                    <div className="text-center md:text-left space-y-4">
                        <h3 className="text-xl font-bold mb-4 flex items-center justify-center md:justify-start">
                            <FontAwesomeIcon icon={faStore} className="mr-2" />
                            Salem
                        </h3>
                        <p className="flex items-center justify-center md:justify-start">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                            Calle Principal 123
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            (123) 456-7890
                        </p>
                        <p className="flex items-center justify-center md:justify-start">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            salem@ejemplo.com
                        </p>
                    </div>

                    {/* Columna 2 - Enlaces rápidos */}
                    <div className="text-center space-y-4">
                        <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
                        <div className="flex flex-col space-y-2">
                            <Link to="/categoria/sahumerios" className="hover:text-white transition-colors">
                                Sahumerios
                            </Link>
                            <Link to="/categoria/velas" className="hover:text-white transition-colors">
                                Velas
                            </Link>
                            <Link to="/categoria/perfumes" className="hover:text-white transition-colors">
                                Perfumes
                            </Link>
                        </div>
                    </div>

                    {/* Columna 3 - Redes sociales */}
                    <div className="text-center md:text-right">
                        <h3 className="text-xl font-bold mb-4">Síguenos</h3>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                               className="hover:text-blue-600 transform hover:scale-125 transition-all duration-200">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                               className="hover:text-pink-600 transform hover:scale-125 transition-all duration-200">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                               className="hover:text-green-600 transform hover:scale-125 transition-all duration-200">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                               className="hover:text-gray-800 transform hover:scale-125 transition-all duration-200">
                                <FontAwesomeIcon icon={faTiktok} size="2x" />
                            </a>
                        </div>
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

