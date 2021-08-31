import {} from 'react-bootstrap'



export const ItemDetail = ({productos}) => {
return productos.length === 0 ? (
    <h5>Cargando....</h5>
    ): (
    <div className="container mt-5" align="center">
        <div className="row">
            <div className="col-md-12">
                <table className="table table-dark">
                    <thead className="thead-white
                    ">
                        <tr> 
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Imagen</th>
                            <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr key ={productos.id}>
                            <td>{productos.id}</td>
                            <td>{productos.nombre}</td>
                            <td>{productos.descripcion}</td>
                            <td><img src={`https://cdn.shopify.com/s/files/1/0035/4671/0061/products/CamillaandMarc_LowRes-79_1200x.jpg?v=1604021942/${productos.img}`} alt={productos.nombre} className="Imagen"/></td>
                            <td> ${productos.precio}</td>
                    </tr>
                    </tbody>
               </table>
            </div>
        </div>
    </div>    
    )}
export default ItemDetail
