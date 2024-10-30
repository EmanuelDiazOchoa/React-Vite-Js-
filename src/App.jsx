import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Carrusel from './components/carrusel';

function App() {
  return (
    <div className="w-screen h-screen bg-gray-100">
      {}
      <Navbar />

      {}
      <ItemListContainer greeting="¡Salem: El Jardín de Aromas!" />

      {}
      <Carrusel />

      {}
    </div>
  );
}

export default App;
