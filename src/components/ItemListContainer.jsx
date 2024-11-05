import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { id } = useParams(); 

  useEffect(() => {
    
    const fetchProducts = async () => {
      const response = await fetch(`your-api-endpoint?category=${id}`);
      const products = await response.json();
      console.log(products); 
    };

    fetchProducts();
  }, [id]); 

  return <div>Lista de Productos</div>;
};

export default ItemListContainer;

