import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsAsync } from "../asyncMock"; 
import ProductGallery from "./ProductGallery1"; 
import { motion } from "framer-motion";

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
        if (filteredProducts.length > 0) {
          setProductList(filteredProducts); 
        } else {
          setProductList(products)
        }
      } catch (err) {
        setError('Error al cargar productos');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]); 

  const words = "Lo que Buscabas para el Hogar... Esta aca!!!".split(" ");

  if (error) {
    return <p>{error}</p>; 
  }

  return (
    <div className="bg-gradient-to-r from-green-200 via-green-400 to-purple-700">
      <motion.h1 
        className="text-2xl font-heading font-bold tracking-tight text-gray-900 text-center mt-8 mb-12"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeOut"
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
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

