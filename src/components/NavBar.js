import React from 'react'
import Nav from './Nav'
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
      <header>
        <h1 className='header__title'>Mi E-Commerce</h1>
        <Nav />
        <CartWidget/>
    </header>
  )
}

export default NavBar