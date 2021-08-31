

import {Item} from "./Item"

export const ItemList = ({productos}) => {

    return productos.length === 0 ? (
    <h5>Cargando....</h5>
    ) : (
         <div>
          {productos.map ((productos) => (
         <Item key={productos.id} productos={productos}/>
))}
         </div>

    )
    
}

export default ItemList
