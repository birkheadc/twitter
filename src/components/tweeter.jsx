import React, { Component } from 'react';
import { isUserLoggedIn } from '../helpers/isUserLoggedIn';

class Tweeter extends Component {
    state = { 
        
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
        if (this.props.isLoggedIn === true) {
            return this.renderTweeterBox();
        }
        return null;
    }
}
 
export default Tweeter;