import { Link } from "react-router-dom"

export const Item =({producto}) => {

    return (
<div className="container mt-5" align="center">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark">
                    {/* <thead className="thead-white">
                        <tr> 
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Descripción</th>
                            <th scope="col"></th>
                            <th scope="col">Precio</th> 
                            
                        </tr>
                    </thead> */}
                    <tbody>
                            <tr key ={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            {/* <td>{producto.descripcion}</td> */}
                            <td><img src={`https://cdn.shopify.com/s/files/1/0035/4671/0061/products/CamillaandMarc_LowRes-79_1200x.jpg?v=1604021942/${producto.img}`} alt={producto.nombre} className="Imagen"/></td>
                            {/* <td> ${producto.precio}</td> */}
                            <td>  <Link to={`/item/${producto.id}`}><button className="ver"> ver más</button></Link></td>
                           
                    </tr>
                    </tbody>
               </table>

             
            </div>
        </div>
    </div>    

//  <li className="item"><h5>{productos.nombre}</h5></li>    
        
    
      
    
)
    }
export default Item
