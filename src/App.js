
import NavBarComponente from "./Components/NavBar";

import ItemListContainer from "./Components/ItemListContainer";

import ItemDetailContainer from "./Components/ItemDetailContainer";
import {BrowserRouter, Route, Switch} from "react-router-dom";


const App = () => {
    return (
    <BrowserRouter>
        <NavBarComponente/>
        <main>
        <Switch>
           
           <Route path="/" component ={ItemListContainer} exact/>
           <Route path ="/categoria/:id" component={ItemListContainer}/>
   
           <Route path="/item/:id" component = {ItemDetailContainer}/>
   
           </Switch>
           
        </main>
      
     </BrowserRouter>
        
    )
}

export default App