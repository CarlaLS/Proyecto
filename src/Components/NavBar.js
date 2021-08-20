import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';


const NavBarComponente = () => {


  return (
    <header>
      <div className="header">
        <h1 className="titulo"> Mone Pret a Porter</h1>
        <h2 className="titulo">Indumentaria Femenina</h2>
      </div>
      <Navbar bg="dark" variant="dark">

        <Navbar.Brand href="#logo">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <ItemListContainer productoA="Camisas/Remeras" productoB="Pantalones" productoC="Abrigos" />
          <Nav.Link href="#contacto">Contacto</Nav.Link>

        </Nav>
        <CartWidget />
      </Navbar>


    </header>
  )
}

export default NavBarComponente