import React, { Component } from 'react';
import Tweet from './tweet';


class Feed extends Component {

    renderTweets() {
        if (this.props.tweets.length < 1) {
            return (
                <span>
                    No tweets found!
                </span>
            );
        }
        return (
            <ul>
                { this.props.tweets.map(
                    tweet =>
                    <li key={tweet.id}>
                        {Tweet(tweet.userName, tweet.contents)}
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