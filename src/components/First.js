import React, { Component } from 'react';

class First extends Component {
    render() {
        return (
            <div>
                <p>{ this.props.title }</p>
            </div>
        );
    }
}

export default First;