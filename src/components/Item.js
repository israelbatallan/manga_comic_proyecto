import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ({ producto}) => {
  const add = () => {
    alert('Agregado')
  }
  return (
    <div className="card">
      <Link className='text-decoration--none' to={`/item/${producto.id}`}>
        <img src={producto.img} alt={`imagen_producto`} />
        <h2>{producto.nombre}</h2>
        <p>${producto.precio}</p>
      </Link>

      <ItemCount stock={producto.cantidad} initial={0} onAdd={add} />
    </div>
  )
}

export default Item