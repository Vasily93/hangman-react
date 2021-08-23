import React, {Component} from 'react';
import KeyBoard from './KeyBoard';
import Secret from './Secret';
import Image from './Image';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: this.props.word,
            count: this.props.word.length,
            hang: 6

        }
        this.keyClick = this.keyClick.bind(this);
    }

    keyClick(keyValue) {
        if(this.state.word.search(keyValue) >= 0) {
            let target = document.getElementById(keyValue)
            target.innerText = keyValue;
            target.removeAttribute('id');
            this.setState({
                count: this.state.count - 1,
                word: this.state.word.replace(keyValue, '')
            });
        } else {
            this.setState({hang: this.state.hang - 1});
        }
    }

    componentDidUpdate() {
        if(this.state.word.length === 0) {
            alert('you won!!!')
        } else if(this.state.hang === 0) {
            alert('You lost!')
        }
    }

    render() {
        const {word} = this.props;
        const {keyClick} = this;
        
        return(
            <div>
                <Image stage={this.state.hang}/>
                <hr/>
                <KeyBoard keyClick={keyClick}/>
                <hr/>
                <Secret secret={word} />
            </div>
        )
    }
}

export default Game;