import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ item }) => {

    const currencyFormat = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' })

    return (
        <article className="item">
              <Link to={`/item/${item.id}`}><img src={item.img} alt={item.title}/></Link>
              <p className="title">{item.title}</p>
              <p className="price">Precio: {currencyFormat.format(item.price)}</p>
        </article>
    )
}



export default Item