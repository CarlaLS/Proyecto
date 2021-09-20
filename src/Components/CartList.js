import {} from 'react-bootstrap'

const CartList = ({ producto, eliminarProducto }) => {
  return (
    <div>
      <li>
        <span>{producto.cantidad} x</span> {producto.titulo}{" "}
        <span> $ {(producto.precio * producto.cantidad).toFixed(2)}</span>{" "}
        <button onClick={() => {
            eliminarProducto(producto.id);
          }}>
          X
        </button>
      </li>
    </div>
  );
};

export default CartList;