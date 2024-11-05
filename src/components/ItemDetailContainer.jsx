import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
const { id } = useParams(); 
const [productDetail, setProductDetail] = useState(null); 
const [loading, setLoading] = useState(true); 

useEffect(() => {

    const fetchProductDetail = async () => {
    try {
        const response = await fetch(`your-api-endpoint/item/${id}`); 
        if (!response.ok) {
        throw new Error('Error en la carga del producto');
        }
        const data = await response.json();
        setProductDetail(data); 
    } catch (error) {
        console.error(error); 
    } finally {
        setLoading(false); 
    }
    };

    fetchProductDetail();
  }, [id]); 

if (loading) {
    return <div>Cargando...</div>; 
}

if (!productDetail) {
    return <div>No se encontró el producto.</div>; 
}

return (
    <div className="text-center mt-10">
    <h2 className="text-2xl font-bold">{productDetail.name}</h2>
    <img src={productDetail.imageUrl} alt={productDetail.name} className="w-1/2 mx-auto" />
    <p>{productDetail.description}</p>
    <p className="text-lg font-bold">${productDetail.price}</p>
    </div>
);
};

export default ItemDetailContainer;
