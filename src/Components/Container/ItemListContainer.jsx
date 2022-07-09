import { useEffect } from "react"
import { useState } from "react"
import { gFetch } from "../../helpers/getFetch"
import Item from "../Item/Item"
import  ItemCount  from "../Item/ItemCount"
import  { ItemList }  from "../Item/ItemList"



const ItemListContainer = ({greeting}) => {
  Item()

  const [productos, setProductos] = useState([])
  // const [loading, setLoading] = useState (true)

  useEffect( () => {
    ItemList
  .then(respuesta => setProductos(respuesta))
  .catch(error => console.log(error)
  )
  }, [])


  // const handleBool = () => {
  //   setLoading(!loading)
  // }



  return (
    <div>
    {ItemCount.count}

    <button onClick={ItemCount.aumentar}>Agregar +1</button>
    <button onClick={ItemCount.restar}>Quitar -!</button>


    {productos.map(producto => <li key={producto.id} > {producto.nombre}</li>)}
    </div>
  )
}

export default ItemListContainer


