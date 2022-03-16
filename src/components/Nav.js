import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='nav'>
            <NavLink className="nav__link" rel="folow" to="/">Mangas</NavLink>
            <NavLink className="nav__link" to='/'>Comics</NavLink>
            <NavLink className="nav__link" rel="folow" to='/'>Novelas</NavLink>
        </nav>
    );
}

export default Nav;