
import NavBarComponente from "./Components/NavBar";

import ItemListContainer from "./Components/ItemListContainer";

import ItemDetailContainer from "./Components/ItemDetailContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Cart from "./Components/Cart";
import CustomProvider from "./Contexto/CartContext";
import CargarProductos from "./Components/CargarProductos";
import GraciasPorSuCompra from "./Components/GraciasPorSuCompra";
import FormularioOrden from "./Components/FormularioOrden";
import Portada from "./Components/Portada";

const App = () => {
    return (
        <div className="app">
     <BrowserRouter>
    <CustomProvider>
    <NavBarComponente/>
    <Portada/>
        <Switch>
           
           <Route path="/" component ={ItemListContainer} exact/>
           <Route path ="/productos/categoria/:id" component={ItemListContainer}/>
   
           <Route path="/item/:id" component = {ItemDetailContainer}/>
           
           < Route path ="/cart/" component = {Cart}/>
           
           < Route path ="/cargar/" component = {CargarProductos}/>
           < Route path ="/formulario/" component = {FormularioOrden}/>
           < Route path ="/graciasporsucompra/" component = {GraciasPorSuCompra}/>
           
        </Switch>
      
    </CustomProvider>
        
     </BrowserRouter>
        </div>
   
        
    )
}

export default App