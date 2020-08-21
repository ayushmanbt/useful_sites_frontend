import React from 'react'
import "./TopBar.css"
import { NavLink } from 'react-router-dom'

function TopBar() {
    return (
        <nav>
            <h1>Useful Sites</h1>
             <ul>
                 <li><NavLink to ="/" exact>Home</NavLink></li>
                 <li><NavLink to ="/about" exact>About</NavLink></li>
             </ul>
        </nav>
    )
}

export default TopBar
