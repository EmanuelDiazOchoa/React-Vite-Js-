import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import products from "../data/products"; 

const Categorias = () => {
if (!Array.isArray(products) || products.length === 0) {
    return <div>No hay productos disponibles.</div>;
}

return (
    <div className="categorias-container">
        <h2 className="text-2xl font-bold mb-4">Explora nuestros Productos</h2>
        <ul className="categorias-list">
        {products.map((product) => (
            <li key={product.id} className="mb-2">
            <Link
            to={`/producto/${product.id}`}
            className="text-lg text-blue-500 hover:text-blue-700"
            >
                {product.name}
            </Link>
            </li>
            ))}
        </ul>
    </div>
);
=======

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
>>>>>>> 911d7cf (Inicio limpio sin credenciales)
};

export default Categorias;

