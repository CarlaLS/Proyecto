import { useState } from "react"
import getStore from "../ReactFireBase"

const CargarProductos = () => {
const [nombre, setNombre] = useState ("")
const [categoria, setCategoria] = useState ("")
const [precio, setPrecio] = useState (0)
const [descripcion, setDescripcion] = useState ("")
const [stock, setStock] = useState (0)
const [imagen, setImagen] = useState ("")

   const producto ={
    nombre: nombre,
    categoria: categoria,
    precio: precio,
    descripcion: descripcion,
    stock: stock,
    img: imagen

   }

   const handleNombre = (e) => {
setNombre (e.target.value) 

   }

   const handleCategoria = (e) => {
    setCategoria (e.target.value) 
    

       }
    
       const handlePrecio = (e) => {
        setPrecio (e.target.value) 
        
        
           }
       
           const handleDescripcion = (e) => {
            setDescripcion (e.target.value) 
            
            
               }
               const handleStock = (e) => {
                setStock (e.target.value) 
                
                
                   }
                   const handleImagen = (e) => {
                    setImagen (e.target.value) 
                    
                    
                       }
     const sumarProducto = () => {
        const firestore = getStore()
        const collection = firestore.collection("Productos")
        collection.add (producto)

     }                  

    return ( 
        <div>
            <div> <label>Nombre</label> <input onChange={handleNombre}/></div>
            <div> <label>Categoria</label><input onChange={handleCategoria}/></div>
            <div><label>Precio</label><input onChange={handlePrecio}/></div>
            <div> <label>Descripcion</label><input onChange={handleDescripcion}/> </div>
            <div><label>Imagen</label> <input onChange={handleImagen}/></div>
            <div><label>Stock</label><input onChange={handleStock}/></div>
            <button onClick= {sumarProducto}> Añadir Producto</button>
        </div>

    )
}

export default CargarProductos