import React, { Component } from 'react';
import './App.css';
import Tweeter from './components/tweeter';
import Feed from './components/feed';
import Session from './components/session';
import { getToken } from './helpers/authTokenHelper';

class App extends Component {

    state = {
        isLoggedIn: false,
        tweets: [],
    }

    componentDidMount() {
        this.checkIfLoggedIn();
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
            let tweet = {
                "id": data[i].id,
                "userName": data[i].userName,
                "contents": data[i].contents
            };
            tweets.push(tweet);
        }
        this.setState({ tweets: tweets });
    }

    checkIfLoggedIn() {
        const auth = getToken();
        if (auth === null || auth === "") {
            this.setState({ isLoggedIn: false });

            return;
        }
        this.setState({ isLoggedIn: true });
    }

    renderLeftColumn() {
        return null;
    }

    renderCenterColumn() {
        return (
            <React.Fragment>
                {this.renderTweeter()}
                {this.renderFeed()}
            </React.Fragment>
        );
    }

    renderTweeter() {
        return <Tweeter isLoggedIn={this.state.isLoggedIn} refreshFeed={this.refreshFeed}/>;
    }

    renderFeed() {
        return <Feed tweets={this.state.tweets}/>;
    }

    renderRightColumn() {
        return (
            <React.Fragment>
                {this.renderSession()}
            </React.Fragment>
        );
    }

    renderSession() {
        return <Session isLoggedIn={this.state.isLoggedIn} handleSetLogin={this.handleSetLogin} />;
    }

    handleSetLogin = (isLoggedIn) => {
        this.setState({ isLoggedIn: isLoggedIn});
    }

    refreshFeed = () => {
        this.fetchTweets();
    }

    render() {
      return (
        <React.Fragment>
            <div id="left-column">
                {this.renderLeftColumn()}
            </div>
            <div id="center-column">
                {this.renderCenterColumn()}
            </div>
            <div id="right-column">
                {this.renderRightColumn()}
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default App;
