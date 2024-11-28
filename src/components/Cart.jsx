import React from 'react';
import { useCart } from '../context/CartContext';
import { useCheckout } from '../context/CheckoutContext';
import { useNumber } from '../hook/useNumber';
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart();
    const { openCheckout } = useCheckout();
    const { formatNumber } = useNumber();

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
                <Link to="/" className="text-purple-600 hover:text-purple-800">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Tu Carrito</h2>
            {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 mb-4">
                    <img 
                        src={item.img}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded"
                    />
                    <div className="flex items-center">
                        <div>
                            <h3 className="font-bold">{item.name}</h3>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Precio: ${formatNumber(item.price * item.quantity)}</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => removeFromCart(item.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Eliminar
                    </button>
                </div>
            ))}
            <div className="mt-8 space-y-4">
                <p className="text-xl font-bold">Total: ${formatNumber(getCartTotal())}</p>
                <div className="flex gap-4">
                    <button 
                        onClick={clearCart}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
                    >
                        Vaciar Carrito
                    </button>
                    <button 
                        onClick={openCheckout}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition-colors"
                    >
                        Proceder al Pago
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;