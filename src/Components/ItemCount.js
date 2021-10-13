
import { useState } from "react"
const ItemCount = ({ stock, initial, onAdd }) => {


    const [contador, setContador] = useState(initial)

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }

    }
    const agregar = () => {
        if (stock > 0) {
            onAdd(contador)
        }

    }

    return (

    
            <div className="botoncontador">
                <div className="itemcount">
                  <div className="btncontador" onClick={restar}>-</div>
                  <p className="contador">{contador}</p>
                  <div className="btncontador" onClick={sumar}>+</div>
                </div>
              
                <button className="agregarcarritobtn" disabled={ stock > 0 ? false : true} onClick={agregar}>Agregar al carrito</button>
            </div>
    

    )

}



export default ItemCount;