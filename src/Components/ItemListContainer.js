// import {Card, Container, Row, Col} from 'react-bootstrap';
// import ItemList  from './ItemList';
// import ItemCount from './ItemCount';

// const ItemListContainer = (props) => {
//   const { productoA, productoB, productoC } = props

import { useEffect, useState }from "react";
import {ItemList}from "./ItemList";


 export const promiseItemListContainer = () => {
    return new Promise ((resolve,reject) =>{
        setTimeout (
          ()=>
        resolve ([
        {id:'01', destacado: true, nombre: 'Blazer'},
        {id:'02', destacado: false, nombre: 'Chaleco'},
        {id:'03', destacado: true, nombre:'Campera'},
        {id:'04', destacado: false, nombre:'Camisa'},
        ]),
         2000
         );
    });

}
      const ItemListContainer = () => {
  const [dataToShow, SetDataToShow]= useState([]);

  useEffect ( () => {
      promiseItemListContainer().then ((data)=>{ 
        let aux = data.filter(producto => producto.destacado)
        SetDataToShow(aux);
      
});

}, []);

return dataToShow.length === 0 ? (
      <h5>Cargando....</h5>
  ) : (

      <ItemList dataToShow= {dataToShow}/>
      )

    
  
    

}

export default ItemListContainer