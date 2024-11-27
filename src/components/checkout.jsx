import React, { useState } from 'react';
import { useCheckout } from '../context/CheckoutContext';
import { useCart } from '../context/CartContext';
import { useNumber } from '../hook/useNumber';

const Checkout = () => {
    const { isCheckoutOpen, closeCheckout, shippingData, updateShippingData } = useCheckout();
    const { cartItems, getCartTotal, clearCart } = useCart();
    const { formatNumber } = useNumber();
    const [isProcessing, setIsProcessing] = useState(false);

    if (!isCheckoutOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            clearCart();
            closeCheckout();
            alert('¡Compra realizada con éxito!');
        } catch (error) {
            alert('Error al procesar el pago');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4">Finalizar Compra</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* ... resto del formulario ... */}
                    <div className="border-t pt-4 mt-4">
                        <p className="font-bold">Total a pagar: ${formatNumber(getCartTotal())}</p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={closeCheckout}
                            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={isProcessing}
                            className={`flex-1 ${
                                isProcessing 
                                    ? 'bg-gray-400' 
                                    : 'bg-green-600 hover:bg-green-700'
                            } text-white py-2 rounded`}
                        >
                            {isProcessing ? 'Procesando...' : 'Pagar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;