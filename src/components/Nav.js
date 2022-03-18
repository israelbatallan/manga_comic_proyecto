import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink className="nav__link" to="/category/manga">Mangas</NavLink>
            <NavLink className="nav__link" to="/category/comic">Comics</NavLink>
            <NavLink className="nav__link" to="/category/novela">Novelas</NavLink>
        </nav>
    );
}

export default Nav;