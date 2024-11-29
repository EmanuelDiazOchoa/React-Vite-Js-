import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../service/firebase"
import { collection, getDocs, query, where } from 'firebase/firestore'
import ProductGallery from "./ProductGallery"


function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        console.log ( categoryId )
        const productosRef = collection(db, "productos")
        const q = categoryId 
            ? query(collection(db, "productos"), where("category", "==", categoryId)) 
            : productosRef

            console.log (q)
        getDocs(q)
            .then((resp) => {
                console.log ({resp})
                const productosData = resp.docs.map((doc) => ( {id:doc.id,...doc.data() }))
                console.log("Productos cargados:", productosData)
                setProductos(productosData)
            })
            .catch(error => {
                console.error("Error al cargar productos:", error)
            })
            
    }, [categoryId])

    return (
        <div>
            <ProductGallery products={productos} />
        </div>
    )
}

export default ItemListContainer

