import { NavDropdown} from 'react-bootstrap';

const ItemListContainer = (props) => {
    const {productoA, productoB, productoC}= props
    return ( 
        
        < NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1" className= "producto">{productoA}</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2" className= "producto">{productoB}</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3" className= "producto">{productoC}</NavDropdown.Item>
           
        </NavDropdown> 
     );
}
 
export default ItemListContainer;