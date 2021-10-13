
import {FaTrashAlt} from "react-icons/fa"
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
          <div className="carritovacio">
            {" "}
            <h4> ¡No hay productos en el carrito!</h4>
            <Link className="comprarlink" to="">
              <button className="comprarbtn">Ver Productos</button>
            </Link>
          </div>
        ) : (
          <div>
            <h4>Su Carrito</h4>
            <ul>
              {carrito.map((itemCarrito) => {
                return (
                  <CartList
                     itemCarrito= {itemCarrito}
                     eliminarProducto={eliminarProducto}
                     key={itemCarrito.id}
                  />
                );
              })}
            </ul>
              <div className="preciototal">
              <div ><h5>Precio Total: AR$ {precioTotal()}</h5></div>
               <div className="clear" onClick={() => clear()}><FaTrashAlt/><h8>Borrar Todo</h8></div>
              </div>
             <div style={{padding: "20px"}}>
             <Link className="comprarlink" to="/formulario/"><button className="comprarbtn">Continuar Compra</button> </Link>
             </div>
             

          </div>
        )}

      </div>

  )
};

export default Cart;

