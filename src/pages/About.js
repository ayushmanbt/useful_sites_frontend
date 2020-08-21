import React from 'react'
import EmojiComponent from '../components/EmojiComponent.js'

function About() {
    return (
        <div className="container"> 
            <h2>About This App</h2>
            <p>This APP is made with React in the frontend and Express at the backend. It is basically a MERN stack project to show a listing of useful sites</p>

            <br/>

            <div className="footer">
                <p>
                    Developed by <strong>Ayushman Bilas Thakur</strong> 
                    &nbsp;
                    <EmojiComponent emoji="📅" label="year"/>2020
                </p>
                
                <p>
                    <EmojiComponent emoji="🎨" lable="Portfolio Indicating Emoji" />  
                    <a target="_blank" rel="noopener noreferrer" href="https://www.ayushmanbthakur.com">
                        Protfolio
                    </a>
                </p>
            </div>
        </div>
    )
}

export default About
