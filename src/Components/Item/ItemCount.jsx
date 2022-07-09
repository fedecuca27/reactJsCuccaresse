import { useState } from "react"

function ItemCount () {
  const [count , setCount ] = useState(1)

  const aumentar = () => {
    setCount (count + 1)
  }
  const restar = () => {
    setCount (count - 1)
  }
}

export default ItemCount