import React from 'react'
import { NavLink } from 'react-router-dom'
import { CartFill } from 'react-bootstrap-icons'

const CartWidget = () => {
  return (
    <NavLink className="navbar__link" rel="folow" to='/carrito'>
      <a href="#" target="blank" className="nav--item"><CartFill/></a>
    </NavLink>
  )
}

export default CartWidget