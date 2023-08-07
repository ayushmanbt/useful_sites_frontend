import React from 'react'
import EmojiComponent from './EmojiComponent.jsx'
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <p>
                Made with <EmojiComponent emoji="💗" label="love"/> by <strong>AyushmanBT</strong> 
            </p>
            
            <p>
                <EmojiComponent emoji="🎨" lable="Portfolio Indicating Emoji" />  
                &nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://www.ayushmanbthakur.com" className="plink">
                    Protfolio
                </a>
            </p>
        </div>
    )
}

export default Footer
