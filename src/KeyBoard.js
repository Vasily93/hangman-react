import React, {Component} from 'react';

class KeyBoard extends Component {
    static defaultProps = {
        keybord: ['q', 'w', 'e', 'r', 't', 'y', 
            'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 
            'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 
            'v', 'b', 'n', 'm'
        ]
    }
    constructor(props) {
        super(props)
        this.state = {}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e) {
        console.log(e.target.innerText)
        this.props.keyClick(e.target.innerText)
    }
    render() {
        return (
            <div>
                {this.props.keybord.map((val, index) => {
            return <button 
                key={index} 
                onClick={this.handleClick}
                >{val}</button>
        })}
            </div>
        )
    }
}

export default KeyBoard;