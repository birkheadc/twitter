import React, { Component } from 'react';
import { isUserLoggedIn } from '../helpers/isUserLoggedIn';

class Tweeter extends Component {
    state = { 
        isVisible: false,
    } 

    constructor() {
        super();
        this.state.isVisible = isUserLoggedIn();
    }

    checkIfLoggedIn() {
        this.setState({isVisible: isUserLoggedIn()});
    }

    renderTweeterBox() {
        return (
            <div>
                <textarea className="form-control"></textarea>
                <button type="button">Tweet</button>
            </div>
        );
    }

    render() {
        if (this.state.isVisible === true) {
            return this.renderTweeterBox();
        }
        return null;
    }
}
 
export default Tweeter;