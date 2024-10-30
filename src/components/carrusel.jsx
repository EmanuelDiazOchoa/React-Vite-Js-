// src/components/Carrusel.jsx
import React from 'react';

const Carrusel = () => {
  return (
    <div className="cameraContent relative w-full h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('path/to/your-image.jpg')" }}>
      <div className="camera_caption absolute left-[10%] top-[70%] max-w-lg p-4 text-white bg-opacity-50 bg-gray-800 rounded-lg">
        <div className="content-slideshow">
          <h3 className="subtitle subtitle1 text-xl font-semibold mb-2">¡Descubre lo mejor de nuestros productos!</h3>
          <div className="intro intro1 text-lg mb-4">La mejor calidad en sales y aromas naturales.</div>
          <a
            className="btn-buy inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
            href="https://www.etnicaideas.com.ar/sal-del-himalaya/sal-a-granel.html"
          >
            Ir Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
