
import {useState, useEffect}from "react";
import {ItemList}from "./ItemList";
import { useParams } from "react-router";
import getStore from "../ReactFireBase";


const ItemListContainer =() => {

  const [productos, setProductos] = useState ([])
 
  const {id} = useParams()

 
    useEffect (()=>{

    const firestore = getStore()

    const collection = firestore.collection("Productos")

    if (!id) {
        const query = collection.get()

    query.then((snapshot) => {

                const documentos = snapshot.docs

                const productos = documentos.map((doc) => {

                return { id: doc.id, ...doc.data() }

                })

setTimeout(() => {

setProductos(productos)

                }, 2000)

            })

            .catch((error) => {

             throw(error)
            })

    } else {

        let query = collection.where("categoria", "==", id)

        query = query.get()
        query.then((snapshot) => {

                const documentos = snapshot.docs

                const productos = documentos.map((doc) => {

                    return { id: doc.id, ...doc.data() }

                })
  
                setProductos(productos)
            })

            .catch((error) => {

                throw(error)

            })
    }
},[id])

  return (
    <>
     
       <h2>Nuestros Productos</h2>

       <ItemList productos = {productos}/>
       
    </>
  )
}  
export default ItemListContainer