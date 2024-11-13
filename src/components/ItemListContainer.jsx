import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsAsync } from "../asyncMock"; 
import ProductGallery from "./ProductGallery1"; 

const ItemListContainer = () => {
  const { id } = useParams(); 
  const [productList, setProductList] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null); 

      try {
        const products = await fetchProductsAsync(); 
        
        const filteredProducts = products.filter(product => product.category == id); 
      if (filteredProducts.length>0){
        setProductList(filteredProducts); 
      }
      else{
        setProductList(products)
      }
        console.log(productList)
      } catch (err) {
        setError('Error al cargar productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]); 

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lista de Productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : productList.length > 0 ? (
        <ProductGallery products={productList} /> 
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemListContainer;

