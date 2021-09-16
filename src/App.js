
import NavBarComponente from "./Components/NavBar";

import ItemListContainer from "./Components/ItemListContainer";

import ItemDetailContainer from "./Components/ItemDetailContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CustomProvider from "./Contexto/CartContext";


const App = () => {
    return (
    <BrowserRouter>
    <CustomProvider>
    <NavBarComponente/>
        <main>
        <Switch>
           
           <Route path="/" component ={ItemListContainer} exact/>
           <Route path ="/categoria/:id" component={ItemListContainer}/>
   
           <Route path="/item/:id" component = {ItemDetailContainer}/>
   
           </Switch>
           
        </main>
      
    </CustomProvider>
        
     </BrowserRouter>
        
    )
}

export default App