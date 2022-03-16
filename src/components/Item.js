import React from 'react'
import ItemCount from './ItemCount'

const Item = ({ producto }) => {
  const add = () => {
    alert('Agregado')
  }
  return (
    <div className="card">
      <img src={producto.img} alt={`ìmagen_producto`} />
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>

      <ItemCount stock={producto.cantidad} initial={0} onAdd={add} />
    </div>
  )
}

export default Item