import {useState, useEffect }from "react";
import {ItemDetail}from "./ItemDetail";



const id= "01"
const ItemDetailContainer =() => {

  const [productos, setProductos] = useState ([])

  useEffect (()=>{
      fetch('https://mocki.io/v1/aaa921d8-d44a-4f07-a2f2-7a67791e4a18')
      .then(response =>response.json())
      .then ((productos)=>{
        let resultado = productos.find(producto => producto.id ===id)
          setProductos(resultado);

      });
   
  },[]); 
 
  return (
    <ItemDetail productos = {productos}/>)
}
export default ItemDetailContainer