import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrusel from './components/Carrusel';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <CartWidget />
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Bienvenido al Catálogo" />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
                <Carrusel />
            </div>
        </BrowserRouter>
    );
}

export default App;




