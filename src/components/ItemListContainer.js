import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

let productosIniciales = [
  {
    id: 1,
    nombre: 'One Piece #1',
    precio: 650,
    cantidad: 5,
    img: 'https://www.ivrea.com.ar/onepiece/onepiece01.jpg'
  },
  {
    id: 2,
    nombre: 'Ajin #1',
    precio: 750,
    cantidad: 4,
    img: 'https://www.ivrea.com.ar/ajin/ajin01.jpg'
  }
]

const ItemListContainer = ({greeting}) => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
  
    useEffect(() => {
      const pedido = new Promise((res, rej) => {
        setTimeout(() => {
          res(productosIniciales)
        }, 2000)
      })
      pedido
      .then((resultado) => {
        setProductos(resultado)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
    }, [])
  
    if(loading) {
      return <h2>Cargando...</h2>
    }
    else {
      return <ItemList productos={productos} />
    }
  
  }
  
  export default ItemListContainer