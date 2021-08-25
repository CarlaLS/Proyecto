
import NavBarComponente from "./Components/NavBar";

import ItemListContainer from "./Components/ItemListContainer";



const App = () => {
    return (
       <>
        <NavBarComponente/>
        <div>
        <h2 className="titulo mt-5">Nuestros Productos</h2>
        <ItemListContainer/>
        </div>
        
       </>
        
    )
}

export default App