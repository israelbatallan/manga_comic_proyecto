import CartWidget from "./CartWidget"
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { context } from '../context/CartContext'

const NavBar = () => {

    const { totalQuantityCalc } = useContext(context)

    return (
        <header>
            <Link className='brand' to="/">Mi E-Commerce</Link>
            <nav className='nav'>
                <ul>
                    <li>
                    <NavLink className="nav__link" to="/category/manga">Mangas</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav__link" to="/category/comic">Comics</NavLink>
                    </li>
                    <li>
                    <NavLink className="nav__link" to="/category/novela">Novelas</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link cartWidgetContainer" to="/cart">
                            <CartWidget className="cartWidget"/>
                            { totalQuantityCalc() > 0 && <p className="cartCounter">{ totalQuantityCalc() }</p> }
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar