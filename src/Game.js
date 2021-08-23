import React, {Component} from 'react';
import KeyBoard from './KeyBoard';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.word.length,
            hang: 6

        }
        this.keyClick = this.keyClick.bind(this)
        this.isWin = this.isWin.bind(this)
    }

    keyClick(keyValue) {
        if(this.props.word.search(keyValue) >= 0) {
            let target = document.getElementById(keyValue)
            target.innerText = keyValue;
            target.removeAttribute('id');
            this.setState({count: this.state.count - 1});
        } else {
            this.setState({hang: this.state.hang - 1});
        }
    }

    isWin() {
        this.state.count === 0 ? 
            alert('You are a Winner!!!') :
            console.log('not yet')
    }

    render() {
        const {word} = this.props;
        const {keyClick} = this;

        const secret = word.split('').map((val, index) => {
            return <span id={val}>*</span>
        })

        return(
            <div>
                <div>{this.state.hang}</div>
                <KeyBoard keyClick={keyClick}/>
                <hr/>
                <div>{secret}</div>
            </div>
        )
    }
}

export default Game;