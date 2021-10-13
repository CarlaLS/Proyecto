import graciasPorSuCompra from "../../src/img/atelier3.jpg"
import { useCartContext } from "../Contexto/CartContext";
const GraciasPorSuCompra = () => {

    const { orden } = useCartContext();
    return (
        <div>
            <h2>Muchas gracias por su compra!</h2>
            <h4>Su numero de orden: {orden}</h4>
            <div className="imgGraciasXCompra">
                <img src={graciasPorSuCompra} alt="" />
            </div>
        </div>



    )
}



export default GraciasPorSuCompra