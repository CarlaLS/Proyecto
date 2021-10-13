import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';



const NavBarComponente = () => {

  return (
    <div>
    
<header>
  <div>
  <img src="./img/MONE3.png" alt="" className="logo" ></img>
  </div>

  <ul className="navbar-ul">
    <li><NavLink className="navlink" to="/">Inicio</NavLink></li>
     <li><NavLink className="navlink" to="/">Colección SS22</NavLink>
    <ul>
      <li><NavLink className="navlink" to="/productos/categoria/Blazers-Chalecos"> Blazers/Chalecos</NavLink></li>
      <li><NavLink className="navlink" to="/productos/categoria/Pantalones">Pantalones</NavLink></li>
    </ul>
     </li>
  </ul>
  <div className="cartwidget"><CartWidget /></div>
 
</header>
  
</div>
  )
}

export default NavBarComponente;