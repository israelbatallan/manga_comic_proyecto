import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import ItemDetail from './ItemDetail'
import { getItem } from '../resources/Firebase'

const ItemDetailContainer = () => {

  const {item_id} = useParams()
  const [item, setItem] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setLoading(true)
      
      getItem(item_id)
      .then((resultado) => {
          setItem(resultado)
        })
      .catch(() => {
        toast.error("Error al cargar los detalles del producto!")
        })
      .finally(() => {
        setLoading(false)
        })

  }, [item_id])

  return (
    <div className="mainContainer">
        {
          loading
          ? <div className='loader'>Loading...</div>
          : <>
              <h2 className="greeting">Detalle del producto</h2>
              <ItemDetail item={item} />
            </>
        }
    </div>

  )
}

export default ItemDetailContainer