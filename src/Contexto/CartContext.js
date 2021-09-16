import { createContext, useState } from "react";
export const CartContext = createContext ()

const {Provider} = CartContext


const CustomProvider =({children}) => {

const [carrito, setCarrito] = useState ([])

const agregarProducto = (producto, cantidad) => {
    if (inInCart(producto.id)) {
        const newCarrito = carrito.map ((cartElement) => {
            if (cartElement.id ===producto.id) {
                return {
                    ...cartElement,
                    cantidad: cartElement.cantidad + cantidad,
                };
        
       

        } else return cartElement; 
    });
        
           setCarrito (newCarrito);
    } else {
        setCarrito ((prev) => [...prev, {...producto, cantidad}]); 
    }
     
             
};

const eliminarProducto= (id) => {
    const nuevoestadocarrito= carrito.filter (producto => producto.id !==id )
    setCarrito (nuevoestadocarrito)
}

const clear =() => {
    setCarrito  ([])
}

const inInCart =(id) => {
   return carrito.find (producto => producto.id === id)

}

const CartContext = {
    carrito,
    agregarProducto,
    eliminarProducto,
    clear, 
    inInCart

}

return (
    <Provider value= {CartContext}>
         {children}
    </Provider>
  
)
}

export default CustomProvider;