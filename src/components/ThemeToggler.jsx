import React from 'react'
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { setTheme } from "../reducers/theme/actions";
import "../styles/ThemeToggler.css";


function ThemeToggler() {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch();
    const inputRef = useRef();

    const changeTheme = () => {
        inputRef.current.value === "true" ? 
            dispatch(setTheme("dark"))
            :
            dispatch(setTheme("light"))
        
    }

    return (
        <label className='switch'>
            <input ref={inputRef} type='checkbox' value={theme === 'light'} onChange={() => changeTheme()}/>
            <span className='slider'></span>
        </label>
    )
}

export default ThemeToggler