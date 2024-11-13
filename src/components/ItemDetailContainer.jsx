import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ItemDetailContainer = () => {
const { id } = useParams(); 
const [productDetail, setProductDetail] = useState(null); 



useEffect (()=>{
const product= products.filter(e=>e.id==id)
setProductDetail(product[0])
},[])

return (
    <>{productDetail&&<div className="text-center mt-10">
    <h2 className="text-2xl font-bold">{productDetail.name}</h2>
    <img src={productDetail.imageSrc} alt={productDetail.name} className="w-1/2 mx-auto" />
    <p>{productDetail.description}</p>
    <p className="text-lg font-bold">${productDetail.price}</p>
    </div>}</>
);
};

export default ItemDetailContainer;
