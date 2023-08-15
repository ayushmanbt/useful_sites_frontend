import EmojiComponent from './EmojiComponent.js'
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <p>
                Made with <EmojiComponent emoji="💗" lable="love"/> by <strong>AyushmanBT</strong> 
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
