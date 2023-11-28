import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import Header from './Components/Header'

const Root = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        {/* <footer>
            <h2>Footer</h2>
        </footer> */}
    </div>
  )
}

export default Root