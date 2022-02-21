import React, { Component } from 'react';
import './App.css';
import Tweeter from './components/tweeter';
import Feed from './components/feed';
import Session from './components/session';
import Nav from './components/nav';
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
                "contents": data[i].contents,
                "time": data[i].time
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
        return (
            <React.Fragment>
                {this.renderNav()}
            </React.Fragment>
        )
    }

    renderCenterColumn() {
        return (
            <React.Fragment>
                {this.renderTweeter()}
                {this.renderFeed()}
            </React.Fragment>
        );
    }

    renderNav() {
        return <Nav handleTweet={this.handleTweet}/>;
    }

    handleTweet = () => {
        console.log("Open tweet overlay");
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
            <div className="left-column" id="left-column">
                {this.renderLeftColumn()}
            </div>
            <div className="center-column" id="center-column">
                {this.renderCenterColumn()}
            </div>
            <div className="center-column" id="right-column">
                {this.renderRightColumn()}
            </div>
        </React.Fragment>
      );
    }
  }
  
  export default App;
