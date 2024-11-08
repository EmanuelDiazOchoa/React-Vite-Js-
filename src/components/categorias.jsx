import React from "react";
import { Link } from "react-router-dom";
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
};

export default Categorias;

