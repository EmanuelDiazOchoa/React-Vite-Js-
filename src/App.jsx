import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { CheckoutProvider } from './context/CheckoutContext';
import Home from './components/home';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Checkout from './components/Checkout';


function App() {
  return (
    <CartProvider>
      <CheckoutProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[84px]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </main>
            <Footer />
            <Checkout />
          </div>
        </BrowserRouter>
      </CheckoutProvider>
    </CartProvider>
  );
}

export default App;




