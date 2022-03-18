import React from 'react'
import Nav from './Nav'
import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <header>
        <Link className='header__title' to="/">Mi E-Commerce</Link>
        <Nav/>
        <CartWidget/>
      </header>
  )
}

export default NavBar