import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import products from '../data/products';
<<<<<<< HEAD
=======
import { useCart } from '../context/CartContext';
>>>>>>> 911d7cf (Inicio limpio sin credenciales)

const ItemDetailContainer = () => {
const { id } = useParams(); 
const [productDetail, setProductDetail] = useState(null); 
<<<<<<< HEAD


=======
const [quantity, setQuantity] = useState(1);
const { addToCart } = useCart();
>>>>>>> 911d7cf (Inicio limpio sin credenciales)

useEffect (()=>{
const product= products.filter(e=>e.id==id)
setProductDetail(product[0])
},[])

<<<<<<< HEAD
=======
const handleAddToCart = () => {
    if (quantity < 1) {
        alert('La cantidad debe ser mayor a 0');
        return;
    }
    addToCart(productDetail, quantity);
};

useEffect(() => {
    const product = products.find(e => e.id == id);
    if (!product) {
        
        return;
    }
    setProductDetail(product);
}, [id]);

>>>>>>> 911d7cf (Inicio limpio sin credenciales)
return (
    <>{productDetail&&<div className="text-center mt-10">
    <h2 className="text-2xl font-bold">{productDetail.name}</h2>
    <img src={productDetail.imageSrc} alt={productDetail.name} className="w-1/2 mx-auto" />
    <p>{productDetail.description}</p>
    <p className="text-lg font-bold">${productDetail.price}</p>
<<<<<<< HEAD
=======
    <div className="mt-4">
        <input 
            type="number" 
            min="1" 
            value={quantity} 
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="border p-2"
        />
        <button 
            onClick={handleAddToCart}
            className="bg-violet-500 text-white px-4 py-2 ml-2 rounded"
        >
            Agregar al Carrito
        </button>
    </div>
>>>>>>> 911d7cf (Inicio limpio sin credenciales)
    </div>}</>
);
};

export default ItemDetailContainer;
