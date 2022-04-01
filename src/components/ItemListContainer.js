import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import { getItems, getItemsByCategory } from '../resources/Firebase'

const titulo = "Nuestras Novedades"

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])
    const { category_id } = useParams()
  
    useEffect(() => {
      setLoading(true)

      if (category_id) {
        getItemsByCategory(category_id)
        .then((items) => {setItems(items)})
        .catch(() => {toast.error("Error al cargar los productos!")})
        .finally(() => {setLoading(false)})
      } else {
        getItems()
        .then((items) => {setItems(items)})
        .catch(() => {toast.error("Error al cargar los productos!")})
        .finally(() => {setLoading(false)})
      }


    }, [category_id])

    return (
      <div className="mainContainer">
        {
          loading
          ? <div className='loader'>Loading...</div>
          : <>
              <h2 className="greeting">{titulo}</h2>
              <ItemList items={items}/>
            </>
        }
      </div>
    )
  
  }
  
  export default ItemListContainer