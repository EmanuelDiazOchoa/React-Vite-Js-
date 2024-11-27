import React, { createContext, useContext, useState } from 'react';

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [shippingData, setShippingData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        phone: ''
    });

    const openCheckout = () => setIsCheckoutOpen(true);
    const closeCheckout = () => setIsCheckoutOpen(false);

    const updateShippingData = (data) => {
        setShippingData(prev => ({...prev, ...data}));
    };

    return (
        <CheckoutContext.Provider value={{
            isCheckoutOpen,
            openCheckout,
            closeCheckout,
            shippingData,
            updateShippingData
        }}>
            {children}
        </CheckoutContext.Provider>
    );
}

export function useCheckout() {
    const context = useContext(CheckoutContext);
    if (!context) {
        throw new Error('useCheckout debe ser usado dentro de un CheckoutProvider');
    }
    return context;
}