import { Navbar, Nav } from 'react-bootstrap';



const NavBarComponente = () => {

   
    return (
        <header>
          <div div class="header">
            <h1 class="titulo"> Mone Pret a Porter</h1>
            <h2 class="titulo">Indumentaria Femenina</h2>
</div>
  <Navbar bg="dark" variant="dark">

    <Navbar.Brand href="#logo">Logo</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#nosotros">Nosotros</Nav.Link>
      <Nav.Link href="#productos">Productos</Nav.Link>
      <Nav.Link href="#contacto">Contacto</Nav.Link>
    </Nav>
  </Navbar>
  

        </header>
    )
}

export default NavBarComponente