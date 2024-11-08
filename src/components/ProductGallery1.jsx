import React, { useState, useEffect } from 'react';

const ProductGallery1 = () => {

const [products, setProducts] = useState([]);


    useEffect(() => {
    
    fetch('/api/products')  
    .then((response) => response.json())
    .then((data) => {
        
        setProducts(data);
    })
    .catch((error) => {
        console.error('Error loading products:', error);
    });
}, []);


if (!Array.isArray(products) || products.length === 0) {
    return <div>Cargando productos...</div>;
}

return (
    <div className="product-gallery">
    
        {products.map((product) => (
            <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        
        </div>
        ))}
    </div>
    );
};

export default ProductGallery1;


