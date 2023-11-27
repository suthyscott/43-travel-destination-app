import './Header.css'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <NavLink to='/addDest'>Add a New Destination</NavLink>
        </nav>
    )
}

export default Header