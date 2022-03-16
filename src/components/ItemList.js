import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
  return (
    <section className='conteiner--fluid grid--sm--1 grid--med--2 grid--larg--3 grid--xl--4'>
      {productos.map((producto) => {
        return <Item key={producto.id} producto={producto} />
      })}
    </section>
  )
}

export default ItemList