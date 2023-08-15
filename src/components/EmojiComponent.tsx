const EmojiComponent = ({emoji = "🤔", lable = "Emoji may not be loaded"}) => {
    return (
        <span role="img" aria-labelledby={lable}>
            {emoji}
        </span>
    )
}

export default EmojiComponent
