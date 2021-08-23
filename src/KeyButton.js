function KeyButton(props) {
    const handleClick = (e) => {
        props.keyClick(e)
    }
    return <button key={props.index} onClick={handleClick}>
                {props.val}
            </button>
}

export default KeyButton; 