import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/products"; // Importando las categorías desde el archivo de datos

const Categorias = () => {

if (!Array.isArray(categories)) {
    return <div>No hay categorías disponibles.</div>;
    }

return (
    <div className="categorias-container">
        <h2 className="text-2xl font-bold mb-4">Explora nuestras Categorías</h2>
        <ul className="categorias-list">
        {categories.length === 0 ? (
        <li>Cargando categorías...</li>
        ) : (
        categories.map((category) => (
        <li key={category.id} className="mb-2">
            <Link
                to={`/productos/${category.id}`}
                className="text-lg text-blue-500 hover:text-blue-700"
            >
                {category.name}
            </Link>
            </li>
        ))
        )}
    </ul>
    </div>
);
};

export default Categorias;
