import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';


const NavBarComponente = () => {


  return (
    <header>
      <div className="header">
      <NavLink className="navlink" to="/">
      <h1 className="titulo"> Möne Pret a Porter</h1>
        <h2 className="titulo">Indumentaria Femenina</h2>
      </NavLink>
        
        
      </div>
      
      <Navbar bg="dark" variant="dark">

<Navbar.Brand href="#logo">Logo</Navbar.Brand>

<Nav className="me-auto">
  <NavLink  className="active"to="/categoria/Abrigos">Abrigos</NavLink>
  <NavLink  className="active" to="/categoria/Chalecos">Chalecos</NavLink>
  <NavLink  className="active"to="/categoria/Chalinas">Chalinas</NavLink>

</Nav>
<CartWidget />


</Navbar>



    
     

      
      
     
    </header>
  )
}

export default NavBarComponente;