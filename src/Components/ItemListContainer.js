// import {Card, Container, Row, Col} from 'react-bootstrap';
// import ItemList  from './ItemList';
// import ItemCount from './ItemCount';

// const ItemListContainer = (props) => {
//   const { productoA, productoB, productoC } = props

import { useEffect, useState }from "react";



  const promiseItemListContainer = () => {
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
export const ItemListContainer = () => {
  const [dataToShow, SetDataToShow]= useState([]);

  useEffect ( () => {
      promiseItemListContainer().then ((data)=>{     // eslint-disable-next-line no-unused-expressions
        let aux = data.filter(ItemList => ItemList.destacado)
        SetDataToShow(aux);
});

}, []);

return dataToShow.length === 0 ? (
      <h5>Cargando....</h5>
  ) : (
      <ul>
          {dataToShow.map ((Item)=> (
          <li  key= {Item.id}><h5>{Item.nombre}</h5></li>

          ))}  
      </ul>
  )

}

export default ItemListContainer