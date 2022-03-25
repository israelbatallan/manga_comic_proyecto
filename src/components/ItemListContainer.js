import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { toast } from 'react-toastify'
import products from '../resources/Products.json'

const saludo = "Nuestras Novedades"

const getProducts = (id) => {
    return new Promise((res, rej) => {
      setTimeout(() => res(products.list), 500)
    })
}

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {category_id} = useParams()
  
    useEffect(() => {
      setLoading(true)

      getProducts(category_id)

      .then((resultado) => {
        category_id
        ? setProductos(resultado.filter((item) => item.category_id === category_id))
        : setProductos(resultado)
      })
      .catch(() => {
        toast.error("Error while loading products!")
      })
      .finally(() => {
        setLoading(false)
      })
    }, [category_id])

    return (
      <div className="mainContainer">
        {
          loading
          ? <div className='loader'>Loading...</div>
          : <>
              <h2 className="greeting">{saludo}</h2>
              <ItemList productos={productos}/>
            </>
        }
      </div>
    )
  
  }
  
  export default ItemListContainer