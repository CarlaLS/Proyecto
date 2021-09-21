import {} from 'react-bootstrap'

const CartList = ({ producto, eliminarProducto}) => {

  return (
    <div className="container mt-5" align="center">
    <div div className="row">
        <div className="col-md-12">
            <table className="table table-dark">
                
                <tbody>
                        <tr key ={producto.id}>
                        <td>{producto.producto.nombre}</td>
                        
                        <td><img src={`https://cdn.shopify.com/s/files/1/0035/4671/0061/products/CamillaandMarc_LowRes-79_1200x.jpg?v=1604021942/${producto.img}`} alt={producto.nombre} className="Imagen"/></td>
                        <td> {producto.cantidad} x  $ {producto.producto.precio}</td> 
                        <td> <span> $ {parseInt(producto.producto.precio) * parseInt(producto.cantidad).toFixed(2)}</span> </td>    
                        </tr>
             
                </tbody>
           </table>
           <div>
    {/* <div>
      <li>
        <span>{producto.cantidad} x </span> {producto.producto.precio}{" "}
        <span> $ {parseInt(producto.producto.precio) * parseInt(producto.cantidad).toFixed(2)}</span>{" "} */}

        <button onClick={() => {
            eliminarProducto(producto.id);
          }}>
          X
        </button>
      {/* </li> */}
    </div>
  </div>
  </div>
  </div>
  );
  
};

export default CartList;