import React, {Component} from 'react';
import KeyButton from './KeyButton';

class Game extends Component {
    static defaultProps = {
        keybord: ['q', 'w', 'e', 'r', 't', 'y', 
            'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 
            'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 
            'v', 'b', 'n', 'm'
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.keyClick = this.keyClick.bind(this)
    }

    keyClick(e) {
        console.log( e.target.innerText)
    }

    render() {
        const {keybord} = this.props;
        const {keyClick} = this;
        const allKeys = keybord.map((val, index) => {
            return <KeyButton 
                key={index} 
                val={val}
                keyClick={keyClick}
                />
        })
        return(
            <div>{allKeys}</div>
        )
    }
}

export default Game;