
import {} from 'react-bootstrap'
import {Link} from "react-router-dom";
import { useCartContext } from "../Contexto/CartContext";
import CartList from './CartList';
import { useEffect, useState } from 'react';
import getStore from '../ReactFireBase';
import FormularioOrden from './FormularioOrden';

export const Cart = () => {
  const { carrito, precioTotal, clear, eliminarProducto } = useCartContext();

  const [nombre, setNombre] = useState ("")
  const [telefono, setTelefono] = useState (0)
  const [email, setEmail] = useState ("")
    
  
useEffect (() => {
  precioTotal()
}, [carrito, precioTotal]) 



   const newOrden ={
     buyer : {
      nombre: nombre,
      telefono: telefono,
      email: email
     },
    
     items: carrito,
     date: new Date().toLocaleDateString ('en-GB'),
     total: precioTotal ()
   }

  console.log (newOrden)

  const guardarOrden = () => {
  
    const firestore = getStore()
    const collection = firestore.collection("Ordenes")
    collection.add (newOrden).then((orden) =>{
      alert (orden.id)
    })

 }                  

  
  return (
      <div className="cartContainer">
        {carrito.length === 0 ? (
          <div>
            {" "}
            <h3> ¡No hay productos en el carrito!</h3>
            <Link to="">
              <button>Ver Productos</button>
            </Link>
          </div>
        ) : (
          <div>
            <ul>
              {carrito.map((producto) => {
                return (
                  <CartList
                     producto= {producto}
                  
                    eliminarProducto={eliminarProducto}
                    key={producto.id}
                  />
                );
              })}
                  </ul>
              
               <div>Total Precio: $ {precioTotal()}</div>
              <button onClick={() => clear()}>Borrar Carrito</button>
              <FormularioOrden setNombre={setNombre} setTelefono= {setTelefono} setEmail= {setEmail}/>
              <button onClick= {guardarOrden}>Finalizar Compra</button>
               </div>
        )}
      </div>
  )
};

export default Cart;

