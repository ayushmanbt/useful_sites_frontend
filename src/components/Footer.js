import React from 'react'
import EmojiComponent from './EmojiComponent.js'

function Footer() {
    return (
        <div className="footer">
            <p>
                Made with <EmojiComponent emoji="❤" label="love"/> by <strong>Ayushman Bilas Thakur</strong> 
                &nbsp;
                <EmojiComponent emoji="📅" label="year"/>2020
            </p>
            
            <p>
                <EmojiComponent emoji="🎨" lable="Portfolio Indicating Emoji" />  
                <a target="_blank" rel="noopener noreferrer" href="https://www.ayushmanbthakur.com" className="col_white">
                    Protfolio
                </a>
            </p>
        </div>
    )
}

export default Footer
