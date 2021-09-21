import React, {Component} from 'react';
import genarateWord from 'random-english-words';
import KeyBoard from './KeyBoard';
import Secret from './Secret';
import Image from './Image';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            word: null,
            stage: 1,
            secret: null
        }
        this.keyClick = this.keyClick.bind(this);
        this.newWord = this.newWord.bind(this);
    }

    keyClick(keyValue) {
        if(this.state.word.search(keyValue) >= 0) {
            let target = document.getElementById(keyValue)
            target.innerText = keyValue;
            target.removeAttribute('id');
            this.setState({
                word: this.state.word.replace(keyValue, '')
            });
        } else {
            this.setState({stage: this.state.stage + 1});
        }
    }

    newWord() {
        let word = genarateWord()
        this.setState({word: word, secret: word})
    }

    componentDidUpdate() {
        if(this.state.word.length === 0) {
            alert('you won!!!')
        } else if(this.state.stage === 7) {
            alert('You lost!')
        }
    }

    render() {
        const {keyClick} = this;
        let starter = this.state.word ?
            <Secret secret={this.state.secret} /> :
            <button onClick={this.newWord}>Generate New Word</button>
        return(
            <div>
                <Image stage={this.state.stage}/>
                <hr/>
                <KeyBoard keyClick={keyClick}/>
                <hr/>
                {starter}
            </div>
        )
    }
}

export default Game;