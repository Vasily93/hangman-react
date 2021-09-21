import imgArr from "./imgArr";

function Image(props) {
    let img = imgArr[props.stage -1]
    return(
        <div>
            <img src={img} alt="hangman" style={{height: 200 }}></img>
        </div>
    )
}

export default Image;