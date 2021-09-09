

import {Item} from "./Item"

export const ItemList = ({productos}) => {

    return productos.length === 0 ? (
    <h5>Cargando....</h5>
    ) : (
         <div>
          {productos.map ((producto) => (
         <Item key={producto.id} producto={producto}/>
))}
         </div>

    )
    
}

export default ItemList
