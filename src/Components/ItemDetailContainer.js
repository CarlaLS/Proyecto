import {useState, useEffect }from "react";
import {ItemDetail}from "./ItemDetail";
import { useParams } from "react-router";
import getStore from "../ReactFireBase";


const ItemDetailContainer =() => {

  const [producto, setProducto] = useState ([])

  const {id} = useParams ()

  useEffect (()=>{

    const firestore = getStore()
    const collection = firestore.collection("Productos")
    let query = collection.doc(id).get()

            query
            .then(doc => {

                    if (doc.exists) {

                      setProducto({ id: doc.id, ...doc.data() })

                    } else {

                        alert("Producto inexistente")
                    }
                })

                .catch(err => {

                    throw(err)
                })

  },[id]); 
 
  return (
    <div>
        <h2>Detalle del producto</h2>
        <ItemDetail producto = {producto}/>
       
    </div>
    )
}
export default ItemDetailContainer