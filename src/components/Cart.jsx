import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useNumber } from '../hooks/useNumber';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart();
    const { formatNumber } = useNumber();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver a la tienda
                    </Link>
                    <h1 className="text-4xl font-extrabold text-gray-800 mt-4 mb-2">Tu carrito está vacío</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-8">
                <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver
                </Link>
                <h1 className="text-4xl font-extrabold text-gray-800 mt-4 mb-2">Tu carrito</h1>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Link to="/" className="hover:text-indigo-600">Inicio</Link>
                    <span>→</span>
                    <span className="text-gray-800 font-medium">Carrito</span>
                </div>
            </div>

            <div className="container mx-auto px-4 pb-16">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <div className="space-y-8">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                                <img 
                                    src={item.img || item.imageSrc} 
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-md"
                                />
                                <div className="ml-4 flex-grow">
                                    <h4 className="font-medium text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-gray-500">Cantidad: {item.quantity}</p>
                                </div>
                                <div className="text-right mr-4">
                                    <p className="font-medium text-gray-900">${formatNumber(item.price * item.quantity)}</p>
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-red-500 hover:text-red-700 transition-colors"
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}

                        <div className="p-6 bg-gray-50 rounded-xl">
                            <div className="flex justify-between items-center">
                                <button 
                                    onClick={clearCart}
                                    className="px-4 py-2 text-red-600 hover:text-red-800 transition-colors"
                                >
                                    Vaciar carrito
                                </button>
                                <div className="flex items-center gap-4">
                                    <p className="text-xl font-bold">
                                        Total: ${formatNumber(getCartTotal())}
                                    </p>
                                    <Link 
                                        to="/checkout"
                                        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                                    >
                                        Proceder al pago
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;