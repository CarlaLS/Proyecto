import { Link } from "react-router-dom";
import { useCartContext } from "../Contexto/CartContext";

const CartWidget = () => {
    const {totalItems}= useCartContext();

    return ( 
        <div className="cart">
            {""}
        <Link to = "/cart"><span className="material-icons"> shopping_cart</span>
        {<span className= "total-items">{totalItems}</span>}
        </Link> {""}
        </div>
       
     );
}
 
export default CartWidget;