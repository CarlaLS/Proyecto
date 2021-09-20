import { createContext, useState, useContext} from "react";
export const CartContext = createContext ()

export const useCartContext = () => useContext (useCartContext)
const {Provider} = CartContext


 export const CustomProvider =({children}) => {

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
    const nuevoestadocarrito= carrito.filter (producto => producto.id !==id )
    setCarrito (nuevoestadocarrito)
}

const clear =() => setCarrito  ([]);

let totalItems = carrito.reduce ((acc, producto) =>{
        return acc + producto.cantidad;
    }, 0),

 
precioTotal = () => {
const number = carrito.reduce ((acc, producto) => {
        return acc + producto.precio * producto.cantidad;
    }, 0)
    .toFixed (2);
    return number;   

};

const inInCart =(id) => {
   return carrito.find ((producto) => producto.producto.id === id)

}

const CartContext = {
    carrito,
    agregarProducto,
    eliminarProducto,
    clear, 
    inInCart,
    precioTotal,
    totalItems
        
}

return (
    <Provider value= {CartContext}>
         {children}
    </Provider>
  
)
}

export default CustomProvider;