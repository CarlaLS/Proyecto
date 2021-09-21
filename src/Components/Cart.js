
import {} from 'react-bootstrap'
import {Link} from "react-router-dom";
import { useCartContext } from "../Contexto/CartContext";
import CartList from './CartList';
import { useEffect } from 'react';

export const Cart = () => {
  const { carrito, precioTotal, clear, eliminarProducto } = useCartContext();
  
useEffect (() => {
  precioTotal()
}, [carrito, precioTotal]) 


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
               </div>
        )}
      </div>
      // <div className="carritos">
      //   <div className="carrito">
      //     <div className="carrito-close">
      //       <box-icon name="x"></box-icon>
      //     </div>
      //     <h2> Su Carrito</h2>
      //     <div className="carrito-center">
      //       <div className="carrito-item"></div>
      //     </div>
      //   </div>
      // </div>
  )
};

export default Cart;

