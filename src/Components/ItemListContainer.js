import { NavDropdown } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
  const { productoA, productoB, productoC } = props
  return (

    < NavDropdown title="Productos" id="basic-nav-dropdown">
      <div className="producto"><NavDropdown.Item href="#action/3.1"><h5>{productoA}</h5></NavDropdown.Item>
        <ItemCount stock={5} initial={1} onAdd={(cantidad) => { console.log(cantidad) }} /></div>
      <div className="producto"> <NavDropdown.Item href="#action/3.2"><h5>{productoB}</h5></NavDropdown.Item>
        <ItemCount stock={5} initial={1} onAdd={(cantidad) => { console.log(cantidad) }} /></div>
      <div className="producto"><NavDropdown.Item href="#action/3.3"><h5>{productoC}</h5></NavDropdown.Item>
        <ItemCount stock={5} initial={1} onAdd={(cantidad) => { console.log(cantidad) }} /></div>
    </NavDropdown>

  );

}

export default ItemListContainer;