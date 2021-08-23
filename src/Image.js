import React, {Component} from 'react';

class Image extends Component {
    render() {
        return(
            <div>
                Mistakes left:{this.props.stage}
            </div>
        )
    }
}

export default Image;