
import "../styles/TopBar.css"
import { NavLink } from 'react-router-dom'
import ThemeToggler from './ThemeToggler'

function TopBar() {

    return (
        <nav>
            <div className="nav_wrapper">
                <h1>Useful Sites</h1>
                <ul>
                    <li><NavLink to ="/" end>Home</NavLink></li>
                    <li><NavLink to ="/about" end>About</NavLink></li>
                    <li><ThemeToggler /></li>
                </ul>
            </div>

        </nav>
    )
}

export default TopBar
