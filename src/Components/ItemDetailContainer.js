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

                    console.log(err)
                })

      // fetch('https://mocki.io/v1/2c914cfb-39b0-4f31-9e9e-277c5c5ad1a1')
      // .then(response =>response.json())
      // .then ((producto)=>{
      //   let resultado = producto.find(producto => (producto.id ===id))
      //     setProducto(resultado);

      // });
   
  },[id]); 
 
  return (
    <div>
        <h2 className="titulo mt-5">Detalle del producto</h2>
        <ItemDetail producto = {producto}/>
       
    </div>
    )
}
export default ItemDetailContainer