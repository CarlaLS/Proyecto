import {} from 'react-bootstrap'



export const ItemDetail = ({producto}) => {
return producto.length === 0 ? (
    <h5>Cargando....</h5>
    ): (
    <div className="container mt-5" align="center">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark">
                    <thead className="thead-white">
                        <tr> 
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key ={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.descripcion}</td>
                            <td><img src={`https://cdn.shopify.com/s/files/1/0035/4671/0061/products/CamillaandMarc_LowRes-79_1200x.jpg?v=1604021942/${producto.img}`} alt={producto.nombre} className="Imagen"/></td>
                            <td> ${producto.precio}</td>
                    </tr>
                    </tbody>
               </table>
            </div>
        </div>
    </div>    
    )}
export default ItemDetail
