import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../service/firebase"
import {collection, getDocs, query, where} from 'firebase/firestore'
import ProductGallery1 from "./ProductGallery1"

function ItemListContainer({greetings}) {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    const {categoryId} = useParams()

    useEffect(()=>{
      console.log("Categoría actual:", categoryId)
      setLoader(true)
      const collectionRef = categoryId
        ? query(collection(db, "products"), where("category", "==", categoryId))
        : collection(db, "products")
      
        getDocs(collectionRef)
          .then((querySnapshot)=>{
            const productos = querySnapshot.docs.map((doc)=>{
              return {id: doc.id, ...doc.data()}
            })
            console.log("Productos encontrados:", productos)
            setProducts(productos)
          })
          .catch((error)=>{
            console.log("Error al cargar productos:", error)
          })
          .finally(()=>{
            setLoader(false)
          })

    }, [categoryId])

    console.log("Estado actual de products:", products)

    return (
        <div className="container">
            <h2 className="text-center">{greetings}</h2>
            {loader ? (
                <p>Cargando productos...</p>
            ) : products.length === 0 ? (
                <p>No se encontraron productos en esta categoría</p>
            ) : (
                <ProductGallery1 products={products} />
            )}
        </div>
    )
}

export default ItemListContainer

