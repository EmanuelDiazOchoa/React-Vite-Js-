import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Home from './components/home';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-r from-green-200 via-green-400 to-purple-700">
          <Navbar />
          <div className="pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categoria/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;




