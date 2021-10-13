

import {Item} from "./Item"


export const ItemList = ({productos}) => {

    return productos.length === 0 ? (
    <div className="imgspinner">  <img src="https://th.bing.com/th/id/R.68a0a985a1b931ab4614c29bdf3cfbc9?rik=%2fXbz2OY9VR8y9A&pid=ImgRaw&r=0" alt="" className="spinner"></img></div>
      
    ) : (
         <div className="productos">
          {productos.map ((producto) => (
         <Item key={producto.id} producto={producto}/>
))}
         </div>

    )
    
}

export default ItemList
