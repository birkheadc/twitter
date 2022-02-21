import React, { Component } from 'react';
import { setToken, deleteToken } from '../helpers/authTokenHelper';

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

    handleRegister = () => {
        // TODO
        console.log("Register");
    }

    renderLoginForm() {
        if (this.props.isLoggedIn === false) {
            return (
                <form>
                    <div className="form-group">
                        <label htmlFor="login-userName">User Name</label>
                        <input className="form-control" id="login-userName" placeholder="User Name" type="text"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="login-password">Password</label>
                        <input className="form-control" id="login-password" placeholder="Password" type="password"></input>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.handleLogin} type="button">Log In</button>
                        <button className="btn btn-secondary" onClick={this.handleRegister} type="button">Register</button>
                    </div>
                </form>
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