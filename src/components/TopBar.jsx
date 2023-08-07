import React from 'react'
import "../styles/TopBar.css"
import { NavLink } from 'react-router-dom'
import ThemeToggler from './ThemeToggler'
// import { useDispatch, useSelector } from 'react-redux'
// import {setTheme} from '../reducers/theme/actions'

function TopBar() {

    // const theme = useSelector(state => state.theme.theme);
    // const dispatch = useDispatch();

    // const changeTheme = () => {
    //     if(theme === "light"){
    //       dispatch(setTheme("dark"));
    //     }
    //     else{
    //       dispatch(setTheme("light"));
    //     }
    //   }
    return (
        <nav>
            <h1>Useful Sites</h1>
             <ul>
                 <li><NavLink to ="/" exact>Home</NavLink></li>
                 <li><NavLink to ="/about" exact>About</NavLink></li>
                 {/* <li><button onClick={changeTheme}><EmojiComponent emoji={theme === "light" ? "🌔" : "☀️"} label={theme}/></button></li> */}
                 <li><ThemeToggler /></li>
             </ul>
        </nav>
    )
}

export default TopBar
