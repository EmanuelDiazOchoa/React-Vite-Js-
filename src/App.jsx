import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Carrusel from './components/Carrusel';
import ProductGallery from './components/ProductGallery1';
import Categorias from './components/categorias';  
import './styles/tailwind.css';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Carrusel />
                <h1>Te invitamos a recorrer nuestra tienda</h1>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartWidget />} />
                    <Route path="/categorias" element={<Categorias />} />  
                    <Route path="/productos/:id" element={<ItemListContainer />} />  
                </Routes>
                <ProductGallery />
            </div>
        </BrowserRouter>
    );
}

export default App;


