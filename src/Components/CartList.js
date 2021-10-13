import {FaTrashAlt} from "react-icons/fa"


const CartList = ({ itemCarrito, eliminarProducto}) => {

  return (

<div>
<div className="container2">
  <div className="Imagen">
  <img src= {itemCarrito.producto.img} alt={itemCarrito.producto.nombre} className="imagen4"/>
  <div><h5 className="producto.nombre" style={{textAlign:'center'}}>{itemCarrito.producto.nombre}</h5></div>
  
  </div>
  <div className="Cantidadprecio">
    <div className="Cantidad"><h5>Cantidad</h5></div>
    <div className="Subtotal"><h5>Subtotal</h5></div>
    <div className="Borrar"><h5>Borrar</h5></div>
    <div className="Cantpreciounit">
    <h5>{itemCarrito.cantidad} x  AR$ {itemCarrito.producto.precio}</h5>
    </div>
    <div className="PrecioSubtotal">
    <h5> AR$ {parseInt(itemCarrito.producto.precio) * parseInt(itemCarrito.cantidad).toFixed(2)}</h5>
    </div>
    <div className="BorrarItem" onClick={() => {eliminarProducto(itemCarrito.producto.id); }}><FaTrashAlt/></div>

  </div>
  
</div>

<hr></hr>
</div>
   

  );
  
};

export default CartList;