
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

        <>
            <div className="container"><button className="boton" onClick={restar}>-</button>
                <p className="contador">{contador}</p>
                <button className="boton" onClick={sumar}>+</button>
            </div>
            <button className="button" disabled={stock > 0 ? false : true} onClick={agregar}>Agregar al carrito</button>
        </>

    )


}



export default ItemCount;