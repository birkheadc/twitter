import React, { Component } from 'react';
import { setToken, getToken, deleteToken } from '../helpers/authTokenHelper';

class Session extends Component {
    state = { 
        
    } 

    handleLogin = () => {
        let userName = document.getElementById("login-userName").value;
        let password = document.getElementById("login-password").value;
        this.fetchAuthToken(userName, password);
    }

    fetchAuthToken(userName, password) {
        const apiUrl = "http://localhost:8080/session";
        fetch(apiUrl,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        "userName": userName,
                        "password": password,
                    }
                )
            })
            .then((response) => response.json())
            .then((data) => this.setAuthToken(data));
    }

    setAuthToken(data) {
        let token = data.response;
        if (token === null || token === "") {
            this.handleBadToken();
            return;
        }
        this.handleValidToken(token);
    }

    handleBadToken() {
        // TODO
        console.log("Bad token.");
    }

    handleValidToken(token) {
        setToken(token);
        this.handleSetLogin(true);
    }

    handleLogOut = () => {
        deleteToken();
        this.handleSetLogin(false);
    }

    handleSetLogin = (isLoggedin) => {
        this.props.handleSetLogin(isLoggedin);
    }

    renderLoginForm() {
        if (this.props.isLoggedIn === false) {
            return (
                <div className="form-group">
                    <form action="http://localhost:8080/session" method='post'>
                        <label htmlFor="login-userName">User Name</label>
                        <input id="login-userName" type="text"></input>
                        <label htmlFor="login-password">Password</label>
                        <input id="login-password" type="password"></input>
                        <button onClick={this.handleLogin} type="button">Log In</button>
                    </form>
                </div>
            );
        }
    }

    renderLogoutButon() {
        if (this.props.isLoggedIn === true) {
            return <button onClick={this.handleLogOut} type="button">Log Out</button>;
        }
    }

    render() { 
        return (
            <React.Fragment>
                {this.renderLoginForm()}
                {this.renderLogoutButon()}
            </React.Fragment>
        );
    }
}
 
export default Session;