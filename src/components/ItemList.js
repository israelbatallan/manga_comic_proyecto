import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <section className='conteiner--fluid grid--3'>
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />
      })}
    </section>
  )
}

export default ItemList