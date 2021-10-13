import { createContext, useState, useContext} from "react";
export const CartContext = createContext ()

export const useCartContext = () => useContext (CartContext)
const {Provider} = CartContext


 export const CustomProvider =({children}) => {
const [orden, setOrden]= useState ('')
const [carrito, setCarrito] = useState ([])

const agregarProducto = (producto, cantidad) => {


    if (inInCart(producto.id)) {
        const newCarrito = [...carrito]; 
        newCarrito.forEach (e => {

            if (e.producto.id ===producto.id) {
            
                    e.cantidad += cantidad 
                
                }
    });
        setCarrito (newCarrito);

    } else {
        setCarrito ([...carrito, {producto, cantidad}]); 
    }
           
};

const eliminarProducto= (id) => {
    const nuevoestadocarrito= carrito.filter (item => item.producto.id !==id )
    setCarrito (nuevoestadocarrito)
}

const clear =() => setCarrito  ([]);

let totalItems = carrito.reduce ((acc, producto) =>{
       return acc + producto.cantidad;
    }, 0),

 
precioTotal = () => {
const number = carrito.reduce ((acc, item) => {
        return acc + parseInt(item.producto.precio) * parseInt (item.cantidad);
    }, 0)
    ;
    return number;   

};

const inInCart =(id) => {
   return carrito.find ((item) => item.producto.id === id)

}

const CartContext = {
    carrito,
    agregarProducto,
    eliminarProducto,
    clear, 
    inInCart,
    precioTotal,
    totalItems,
    setCarrito,
    orden,
    setOrden
        
}

return (
    <Provider value= {CartContext}>
         {children}
    </Provider>
  
)
}

export default CustomProvider;