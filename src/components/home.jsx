import React from 'react';
import Carrusel from './Carrusel'; 
import Categorias from './Categorias'; 
import ItemListContainer from './ItemListContainer';
import ProductGallery1 from './ProductGallery1';

const Home = () => {
return (
    <div>

    
    <Carrusel />

    
    <div className="categorias-container my-16">
        <h2 className="text-center text-2xl font-bold">Explora nuestras Categorías</h2>
        <Categorias />
    </div>

    
    <div className="productos-container my-16">
        <h2 className="text-center text-2xl font-bold">Productos Destacados</h2>
        <ItemListContainer />
    </div>

    
    <div className="product-gallery my-16">
        <h2 className="text-center text-2xl font-bold">Productos Recomendados</h2>
        <ProductGallery1 />
    </div>

    </div>
);
};

export default Home;
