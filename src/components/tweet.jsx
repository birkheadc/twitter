import React, { Component } from 'react';

class Tweet extends Component {
    state = {
        id: 0,
        user: "",
        contents: "",
    }

    constructor(id, user, contents) {
        super();
        this.state = {
            id: id,
            user: user,
            contents: contents,
        }
    }

    render() { 
        return (
            <div>
                <h2>{this.state.user}</h2>
                <p>{this.state.contents}</p>
            </div>
        );
    }
}
 
export default Tweet;