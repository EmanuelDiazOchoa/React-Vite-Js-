import React from "react";
import { Link } from "react-router-dom";

const categorias = [
    { id: 1, nombre: "Sahumerio" },
    { id: 2, nombre: "Velas Aromáticas" },
    { id: 3, nombre: "Perfumes Aromáticos" }
];

const Categorias = () => {
    return (
        <div className="categorias-container">
            <h2 className="text-2xl font-bold mb-4">Categorías</h2>
            <ul className="categorias-list">
                {categorias.map((categoria) => (
                    <li key={categoria.id}>
                        <Link to={`/productos/${categoria.id}`}>
                            {categoria.nombre}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categorias;

