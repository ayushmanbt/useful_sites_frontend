import React from 'react'

function EmojiComponent({emoji = "🤔", label = "Emoji may not be loaded"}) {
    return (
        <span role="img" aria-labelledby={label}>
            {emoji}
        </span>
    )
}

export default EmojiComponent
