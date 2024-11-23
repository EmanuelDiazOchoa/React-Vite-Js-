import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsAsync } from "../asyncMock"; 
import ProductGallery from "./ProductGallery1"; 
<<<<<<< HEAD
=======
import { motion } from "framer-motion";
>>>>>>> 911d7cf (Inicio limpio sin credenciales)

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

<<<<<<< HEAD
=======
  const words = "Lo que Buscabas para el Hogar... Esta aca!!!".split(" ");

>>>>>>> 911d7cf (Inicio limpio sin credenciales)
  if (error) {
    return <p>{error}</p>; 
  }

  return (
<<<<<<< HEAD
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lista de Productos</h2>
=======
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
>>>>>>> 911d7cf (Inicio limpio sin credenciales)
      {loading ? (
        <p>Cargando productos...</p>
      ) : productList.length > 0 ? (
        <ProductGallery products={productList} /> 
      ) : (
        <p>No hay productos en esta categoría.</p>
      )}
    </div>
  );
<<<<<<< HEAD
};
=======
  };
>>>>>>> 911d7cf (Inicio limpio sin credenciales)

export default ItemListContainer;

