
function Secret(props) {
        return(
            <div>
                {props.secret.split('').map((val, index) => {
                    return <span key={index} id={val}>*</span>
                })}
            </div>
        )
}

export default Secret;