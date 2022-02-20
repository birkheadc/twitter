import React, { Component } from 'react';
import { getToken } from '../helpers/authTokenHelper';

class Tweeter extends Component {
    state = { 
        
    }

    handleTweet = () => {
        const text = document.getElementById("tweetMessageBox").value;
        this.resetTweetMessageBox();
        if (text === null || text.trim() === "") {
            return;
        }
        this.postTweet(text);
    }

    resetTweetMessageBox() {
        document.getElementById("tweetMessageBox").value = "";
    }

    postTweet(text) {
        const apiUrl = "http://localhost:8080/tweet";
        const auth = this.getAuthToken();
        fetch(
            apiUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': auth
                },
                body: JSON.stringify(
                    {
                        "contents": text
                    }
                )
            }
        )
        .then((response) => this.handleResponse(response));
    }

    handleResponse(response) {
        if (response.status === 200) {
            this.refreshFeed();
        }
    }

    refreshFeed = () => {
        this.props.refreshFeed();
    }

    getAuthToken() {
        let token = getToken();
        return token;
    }

    renderTweeterBox() {
        return (
            <div>
                <textarea className="form-control" id="tweetMessageBox"></textarea>
                <button type="button" onClick={this.handleTweet}>Tweet</button>
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