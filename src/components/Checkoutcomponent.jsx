import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNumber } from '../hooks/useNumber';
import { Link, useNavigate } from 'react-router-dom';
import CartItems from './CartItems';
import ContactInfo from './ContactInfo';
import PaymentInfo from './PaymentInfo';
import OrderSummary from './OrderSummary';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../service/firebase';
import PaymentConfirmation from './PaymentConfirmation';

const Checkout = () => {
    const { cartItems, getCartTotal, clearCart } = useCart();
    const { formatNumber } = useNumber();
    const [isProcessing, setIsProcessing] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        phone: '',
        cardName: '',
        cardNumber: '',
        cardExpMonth: '01',
        cardExpYear: '2024',
        cardCvc: '',
        paymentType: 'credit-card',
        voucher: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.phone || 
            !formData.address || !formData.city || !formData.postalCode ||
            !formData.cardName || !formData.cardNumber || !formData.cardCvc) {
            alert('Por favor completa todos los campos requeridos');
            return false;
        }
        
        if (formData.cardNumber.length !== 16) {
            alert('El número de tarjeta debe tener 16 dígitos');
            return false;
        }

        if (formData.cardCvc.length < 3) {
            alert('El código CVC debe tener al menos 3 dígitos');
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsProcessing(true);
        try {
            const order = {
                buyer: {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    address: formData.address,
                    city: formData.city,
                    postalCode: formData.postalCode
                },
                items: cartItems.map(item => ({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity
                })),
                total: getCartTotal(),
                createdAt: serverTimestamp()
            };

            const docRef = await addDoc(collection(db, 'orders'), order);
            
            clearCart();
            navigate('/payment-confirmation');
        } catch (error) {
            console.error('Error al procesar el pedido:', error);
            alert('Error al procesar el pago');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="p-6 bg-gray-50 border-b border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-800">Detalles de compra</h2>
                            </div>
                            
                            <div className="p-6">
                                <CartItems items={cartItems} />
                            </div>

                            <div className="p-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold mb-4">Información de contacto</h3>
                                <ContactInfo formData={formData} handleInputChange={handleInputChange} />
                            </div>

                            <div className="p-6 border-t border-gray-200">
                                <h3 className="text-lg font-semibold mb-4">Método de pago</h3>
                                <PaymentInfo formData={formData} handleInputChange={handleInputChange} />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
                            <h3 className="text-xl font-bold mb-4">Resumen del pedido</h3>
                            
                            <div className="mb-6">
                                <div className="flex space-x-2">
                                    <input 
                                        type="text"
                                        id="voucher"
                                        value={formData.voucher}
                                        onChange={handleInputChange}
                                        placeholder="Código de descuento"
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                    />
                                    <button className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                                        Aplicar
                                    </button>
                                </div>
                            </div>

                            <OrderSummary cartTotal={getCartTotal()} />

                            <button 
                                onClick={handleSubmit}
                                disabled={isProcessing}
                                className="w-full mt-6 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isProcessing ? "Procesando..." : "Confirmar pedido"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;