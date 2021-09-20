
import {useState, useEffect }from "react";
import {ItemList}from "./ItemList";
import { useParams } from "react-router";


const ItemListContainer =() => {

  const [productos, setProductos] = useState ([])
  const {id} = useParams()

  // const obtenerProductos=() => {
  //   return new Promise ((resolve,reject) =>{       
  //      setTimeout (
  //               ()=>
  //             resolve ([
  //             {id:'01', destacado: true, nombre: 'Blazer', categoria: 'Abrigos'},
  //             {id:'02', destacado: false, nombre: 'Chaleco',  categoria: 'Chalecos'},
  //             {id:'03', destacado: true, nombre:'Campera',  categoria: 'Abrigos'},
  //             {id:'04', destacado: false, nombre:'Camisa',  categoria: 'Camisas'},
  //             ]),2000
  //              );
  //   }, [id])
  // }
  useEffect (()=>{
    fetch('https://mocki.io/v1/83f513d4-dacd-4c39-b165-a2fc72308a83')
      .then(response =>response.json())
      .then ((productos)=>{
        
        let resultado 
        if (id) {
          resultado = productos.filter(producto => producto.categoria === id)
        
        }else {
          resultado = productos
        }

        
        setProductos(resultado);
        
     });
},[id]); 
  return (
    <>
       <h2 className="titulo mt-5">Nuestros Productos</h2>
       <ItemList productos = {productos}/>
    </>
  )
}  
export default ItemListContainer