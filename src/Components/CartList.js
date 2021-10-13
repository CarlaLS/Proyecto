import {FaTrashAlt} from "react-icons/fa"


const CartList = ({ itemCarrito, eliminarProducto}) => {

  return (

<div>
<div class="container2">
  <div class="Imagen">
  <img src= {itemCarrito.producto.img} alt={itemCarrito.producto.nombre} className="imagen4"/>
  <div><h5 className="producto.nombre" style={{textAlign:'center'}}>{itemCarrito.producto.nombre}</h5></div>
  
  </div>
  <div class="Cantidadprecio">
    <div class="Cantidad"><h5>Cantidad</h5></div>
    <div class="Subtotal"><h5>Subtotal</h5></div>
    <div class="Borrar"><h5>Borrar</h5></div>
    <div class="Cantpreciounit">
    <h5>{itemCarrito.cantidad} x  AR$ {itemCarrito.producto.precio}</h5>
    </div>
    <div class="PrecioSubtotal">
    <h5> AR$ {parseInt(itemCarrito.producto.precio) * parseInt(itemCarrito.cantidad).toFixed(2)}</h5>
    </div>
    <div class="BorrarItem" onClick={() => {eliminarProducto(itemCarrito.producto.id); }}><FaTrashAlt/></div>

  </div>
  
</div>

<hr></hr>
</div>
   

  );
  
};

export default CartList;