
const FormularioOrden = ({setNombre, setTelefono, setEmail}) => {

    

    const handleNombre = (e) => {
        setNombre (e.target.value) 
        
           }
        
           const handleTelefono = (e) => {
            setTelefono (e.target.value) 
            
        
               }
            
               const handleEmail = (e) => {
                setEmail (e.target.value) 
                
                
                   }
               
                
                               
             
            return ( 
                <div>
                    <div> <label>Nombre</label> <input onChange={handleNombre}/></div>
                    <div> <label>Teléfono</label><input onChange={handleTelefono}/></div>
                    <div><label>Email</label><input onChange={handleEmail}/></div>
                  
                    
                </div>
        
            )


}

export default FormularioOrden