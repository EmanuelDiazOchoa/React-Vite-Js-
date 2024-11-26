import React from 'react';
import Carrusel from './carrusel'; 
import ProductGallery1 from './ProductGallery1';
import products from '../data/products';

const Home = () => {
    return (
        <div className="productos-container">
            <h2 className="text-center text-2xl font-bold">Productos Destacados</h2>
            <Carrusel />
            <ProductGallery1 products={products} />
        </div>
    );
};

export default Home;
