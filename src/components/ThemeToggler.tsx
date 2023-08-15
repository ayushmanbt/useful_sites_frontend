
import { RefObject, useContext, useRef } from "react";
import "../styles/ThemeToggler.css";
import { ThemeContext } from "../App";


function ThemeToggler() {
    const {theme, setTheme} = useContext(ThemeContext);
    const inputRef : RefObject<HTMLInputElement> = useRef(null);

    const changeTheme = () => {
        inputRef.current?.value === "true" ? 
            setTheme("dark")
            :
            setTheme("light")
        
    }

    return (
        <label className='switch'>
            <input ref={inputRef} type='checkbox' value={(theme === 'light').toString()} onChange={() => changeTheme()}/>
            <span className='slider'></span>
        </label>
    )
}

export default ThemeToggler;