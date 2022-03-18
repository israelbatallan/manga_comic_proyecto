import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import products from '../resources/Products.json'

const getProducts = () => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(products.list)
      }, 2000)
    })
}

const ItemListContainer = () => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {category_id} = useParams()
  
    useEffect(() => {
        
        getProducts()

      .then((resultado) => {
          category_id 
          ? setProductos(resultado.filter((item) => item.category_id === category_id))
          : setProductos(resultado)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [category_id])
  
    if(loading) {
      return <h2>Loading...</h2>
    }
    else {
      return <ItemList productos={productos} />
    }
  
  }
  
  export default ItemListContainer