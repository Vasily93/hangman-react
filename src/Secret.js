import React, {Component} from 'react';

class Secret extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {secret} = this.props;
        return(
            <div>
                {secret.split('').map((val, index) => {
                    return <span id={val}>*</span>
                })}
            </div>
        )
    }
}

export default Secret;