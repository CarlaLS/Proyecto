
import {useState, useEffect }from "react";
import {ItemList}from "./ItemList";

const ItemListContainer =() => {

  const [productos, setProductos] = useState ([])

  const obtenerProductos=() => {
    return new Promise ((resolve,reject) =>{       
       setTimeout (
                ()=>
              resolve ([
              {id:'01', destacado: true, nombre: 'Blazer'},
              {id:'02', destacado: false, nombre: 'Chaleco'},
              {id:'03', destacado: true, nombre:'Campera'},
              {id:'04', destacado: false, nombre:'Camisa'},
              ]),2000
               );
    })
  }
  useEffect (()=>{
    obtenerProductos().then ((productos) => {
      let resultado = productos.filter(producto => producto.destacado)
      setProductos(resultado)
    })  
  })
  return (
    <ItemList productos = {productos}/>)
}
export default ItemListContainer