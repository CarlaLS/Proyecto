import { Link } from "react-router-dom"


export const Item =({producto}) => {

    return (


    
    <div className="cardProduct"> 
     <div><h4 className="producto.nombre">{producto.nombre}</h4></div>
     <div><img src={producto.img} alt={producto.nombre} className="imagen"/></div>
    <div className="btn"><Link to={`/item/${producto.id}`}><button className="verMas"> ver más</button></Link></div>


    </div>
     

)
    }
export default Item
