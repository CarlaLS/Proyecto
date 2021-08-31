
import NavBarComponente from "./Components/NavBar";

import ItemListContainer from "./Components/ItemListContainer";

import ItemDetailContainer from "./Components/ItemDetailContainer";

const App = () => {
    return (
       <>
        <NavBarComponente/>
        <div>
        <h2 className="titulo mt-5">Nuestros Productos</h2>
        <ItemListContainer/>
        </div>
        <div>
        <h2 className="titulo mt-5">Detalle del producto</h2>
        <ItemDetailContainer/>
        </div>
       </>
        
    )
}

export default App