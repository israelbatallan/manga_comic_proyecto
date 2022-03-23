import React from 'react'
import ItemCount from './ItemCount'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import { Link } from 'react-router-dom'

const ItemDetail = ({item}) => {

  const [countInCart, setCountInCart] = useState(0)

  const onAdd = (count) => {
    setCountInCart(count)
    toast.success(`Agregaste ${count} tomo${(count > 1) ? 's' : ''} de ${item.nombre} a tu carrito`, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      }
    )
  }

  return (
    <div className="itemDetail">
      <img src={item?.img} alt={`imagen_producto`}/>
      <div className="detail">
          <h2 className="detail__title">{item?.nombre}</h2>
          <p className="detail__description">{item?.detail}</p>
          <p className="detail__price">Precio: ${item?.precio}</p>
          <div className="detail__counter">
            { countInCart === 0
              ? <ItemCount initial={1} stock={item?.cantidad} onAdd={onAdd}/>
              : <Link to='/cart'><button className='addToCart'>Terminar compra</button></Link>
            }
          </div>
          <p className="detail__stock">Cantidad disponible: {item.cantidad}</p>
      </div>
    </div>
  )
}

export default ItemDetail