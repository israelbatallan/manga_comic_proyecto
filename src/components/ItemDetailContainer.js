import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

import products from '../resources/Products.json'

const getItem = (item_id) => { 

  return new Promise((res, rej) => {

    setTimeout(() => {
        res(products.list.filter((item) => `${item.id}` === item_id)[0])
    }, 2000)
  })
}

const ItemDetailContainer = () => {

  const {item_id} = useParams()
  const [item, setItem] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {

    getItem(item_id)
    .then((resultado) => {
      setItem(resultado)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })

  }, [item_id])

  if(loading) {
    return <h2>Loading...</h2>
  }
  else{
    return <ItemDetail item={item}/>
  }
}

export default ItemDetailContainer