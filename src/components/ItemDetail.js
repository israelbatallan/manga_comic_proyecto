import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  const add = () => {
    alert('Agregado')
  }
  return (
    <div className='d--flex justify-content--around mt--2 mb--2'>
      <img src={item?.img} alt={`ìmagen_producto`} style={{'maxWidth':'25rem'}}/>
      <div className="card" style={{'minWidth':'30rem'}}>
        <h2>{item?.nombre}</h2>
        <p>{item?.detail}</p>
        <p>${item?.precio}</p>
        <ItemCount initial={0} stock={item?.cantidad} onAdd={add} />
      </div>
    </div>
  )
}

export default ItemDetail