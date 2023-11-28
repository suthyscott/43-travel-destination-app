import './Header.css'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Travel Destination App</h1>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/addDest'>Add Destination</NavLink>
            </nav>
        </header>
    )
}

export default Header