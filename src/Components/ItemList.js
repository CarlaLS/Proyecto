import {Item} from "./Item"

export const ItemList =({dataToShow}) => {

    return (
        <ul>
        
        {dataToShow.map ((data)=> (
         <Item key={data.id}data={data}/>
        )

        )
}
    </ul>
    
      
    
)
    }
export default ItemList