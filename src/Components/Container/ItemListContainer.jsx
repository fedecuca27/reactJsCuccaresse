import { useEffect } from "react"
import { useState } from "react"
import { gFetch } from "../../helpers/getFetch"

const ItemListContainer = ({greeting}) => {
  const [count , setCount ] = useState(1)

  const aumentar = () => {
    setCount (count + 1)
  }
  const restar = () => {
    setCount (count - 1)
  }
 
  const [productos, setProductos] = useState([])
  // const [loading, setLoading] = useState (true)

  useEffect( () => {
    gFetch
  .then(respuesta => setProductos(respuesta))
  .catch(error => console.log(error)
  )
  }, [])

  // const handleBool = () => {
  //   setLoading(!loading)
  // }

  

  return (
    <div>
      {count}
      <button onClick={aumentar}>Agregar +1</button>
      <button onClick={restar}>Quitar -!</button>
      {productos.map(producto => <li key={producto.id} > {producto.nombre}</li>)}
    </div>
  )
}

export default ItemListContainer