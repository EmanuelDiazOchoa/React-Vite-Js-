import React from 'react';
import Carrusel from './Carrusel'; 
import ItemListContainer from './ItemListContainer';

const Home = () => {
    return (
        <div className="productos-container bg-gradient-to-r from-green-200 via-green-400 to-purple-700 min-h-screen">
            <h2 className="text-center text-2xl font-bold ">Productos Destacados</h2>
            <Carrusel />
            <ItemListContainer  />
        </div>
    );
};

export default Home;
