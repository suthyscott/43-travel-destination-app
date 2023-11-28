import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from './Components/Header'

const Root = () => {
  return (
    <div>
        <header>
            <h1>Travel Destination App</h1>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/addDest'>Add Destination</NavLink>
            </nav>
        </header>
        {/* <Header/> */}
        <Outlet/>
        <footer>
            <h2>Footer</h2>
        </footer>
    </div>
  )
}

export default Root