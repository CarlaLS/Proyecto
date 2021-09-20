
import {} from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useCartContext } from "../Contexto/CartContext";
import CartList from './CartList';


const Cart = () => {
  const { carrito, precioTotal, clear, eliminarProducto } = useCartContext();
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
                    producto={producto.producto}
                    eliminarProducto={eliminarProducto}
                    key={producto.id}
                  />
                );
              })}
            </ul>
            <div>Total Precio: $ {precioTotal()}</div>
            <button onClick={() => clear()}>Clear Cart</button>
          </div>
        )}
      </div>
  );
};

export default Cart;

