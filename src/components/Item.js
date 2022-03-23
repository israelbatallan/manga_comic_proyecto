import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ producto}) => {
  return (
    <article className="item">
        <Link to={`/item/${producto.id}`}><img src={producto.img} alt={producto.nombre}/></Link>
        <p className="title">{producto.nombre}</p>
        <p className="price">Precio: ${producto.precio}</p>
        <Link className="goToDetail" to={`/item/${producto.id}`}>Ver detalle</Link>
    </article>
  )
}



export default Item