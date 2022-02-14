import React, { Component } from 'react';
import Tweet from './tweet';


class Feed extends Component {

    state = {
        loading: false,
        tweets: [],
    }
  
    componentDidMount() {
        this.fetchTweets();
    }

    fetchTweets() {
        const apiUrl = "http://localhost:8080/tweet";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => this.setTweets(data));
    }

    setTweets(data) {
        let tweets = [];
        for (let i = 0; i < data.length; i++) {
            let tweet = new Tweet(data[i].id, data[i].userName, data[i].contents);
            tweets.push(tweet);
        }
        this.setState({ tweets: tweets });
    }

    renderTweets() {
        if (this.state.tweets.length < 1) {
            return (
                <span>
                    No tweets found!
                </span>
            );
        }
        return (
            <ul>
                { this.state.tweets.map(
                    tweet =>
                    <li key={tweet.state.id}>
                        {tweet.render()}
                    </li>
                    )
                }
            </ul>
        );
    }

    render() { 
        return (
            <div>
                {this.renderTweets()}
            </div>
        );
    }
}
 
export default Feed;