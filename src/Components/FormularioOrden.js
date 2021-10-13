import getStore from '../ReactFireBase';
import { useHistory } from 'react-router';
import { useState } from 'react';

import { useCartContext } from "../Contexto/CartContext";



const FormularioOrden = () => {
  const { carrito, precioTotal, setOrden, setCarrito} = useCartContext();
  const [nombre, setNombre] = useState("")
  const [telefono, setTelefono] = useState(0)
  const [email, setEmail] = useState("")
  const history = useHistory()

  const newOrden = {
    buyer: {
      nombre: nombre,
      telefono: telefono,
      email: email
    },

    items: carrito,
    date: new Date().toLocaleDateString('en-GB'),
    total: precioTotal()
  }



  const guardarOrden = (e) => {
    e.preventDefault()

    const firestore = getStore()
    const collection = firestore.collection("Ordenes")
    collection.add(newOrden).then((orden) => {
      setOrden(orden.id)
      setCarrito([]);
      history.push("/graciasporsucompra/")
    })

  }


  const handleNombre = (e) => {
    setNombre(e.target.value)

  }

  const handleTelefono = (e) => {
    setTelefono(e.target.value)

  }

  const handleEmail = (e) => {
    setEmail(e.target.value)


  }

  return (
    <div style={{ paddingTop: "20px" }}>
      <form className="form" onSubmit={guardarOrden}>

        <h4>Ingrese sus datos para realizar compra </h4>

        <div><h5>Precio Total: $ {precioTotal()}</h5></div>

        <div>
          <label className="label">Nombre y Apellido</label>
          <input className="form-input" type="text" placeholder="Carlos García" id="nombre" onChange={handleNombre} required={true} />
        </div>
        <div>
          <label className="label">Teléfono</label>
          <input className="form-input" placeholder="341236598" type="number" onInput={(e) => e.target.value = e.target.value.slice(0, 10)} id="telefono" onChange={handleTelefono} required={true} />
        </div>
        <div>
          <label className="label">Email</label>
          <input className="form-input" placeholder="carlosgarcia@hotmail.com" type="email" id="email" onChange={handleEmail} required={true} />
        </div>
        <button className="comprarbtn" type="submit">Finalizar Compra</button>
      </form>


    </div>

  )


}

export default FormularioOrden