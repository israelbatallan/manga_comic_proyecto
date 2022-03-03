import React from 'react'
import Nav from './Nav'

const NavBar = () => {
  return (
      <header>
        <h1 className='header__title'>Mi E-Commerce</h1>
        <Nav />
        <span class="material-icons">
          shopping_cart
        </span>
    </header>
  )
}

export default NavBar