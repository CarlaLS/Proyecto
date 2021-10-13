
import ItemCount from "./ItemCount";
import { useState} from 'react';
import {Link } from 'react-router-dom';
import { useCartContext} from '../Contexto/CartContext';


export const ItemDetail = ({producto}) => {

    const {agregarProducto}= useCartContext();
    const [buttonIsClicked, setButtonIsClicked] = useState(false)

    const onAdd =(cantidad) => {
            
             agregarProducto(producto,cantidad)
             setButtonIsClicked (true)    
}
    
return producto.length === 0 ? (
    <div className="imgspinner">  <img src="https://th.bing.com/th/id/R.68a0a985a1b931ab4614c29bdf3cfbc9?rik=%2fXbz2OY9VR8y9A&pid=ImgRaw&r=0" alt="" className="spinner"></img></div>
    ): (

      <div class="container">
  <div class="PortadaImagen">
    <img src={producto.img} alt={producto.nombre} className="imagen2"/>
  </div>
  <div class="Nombre-Info">
    <h4>{producto.nombre}</h4>

    <h6 className="descripcion">{producto.descripcion}</h6>
  </div>
  < div class="Precio-Contador">
  <h4>${producto.precio}</h4>
  {buttonIsClicked ? <Link className="comprarlink" to="/cart">   <button className="comprarbtn">Comprar</button> </Link>: <ItemCount  stock ={5} initial ={1} onAdd ={onAdd}/> }
</div>
</div>


    )
}
export default ItemDetail




