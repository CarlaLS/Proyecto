import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexto/CartContext";

const CartWidget = () => {
    const {totalItems}= useContext(CartContext);

    return ( 
        <div>
        <Link to = "/cart"><span className="material-icons"> shopping_cart</span>
        {<span>{totalItems}</span>}
        </Link>
        </div>
       
     );
}
 
export default CartWidget;