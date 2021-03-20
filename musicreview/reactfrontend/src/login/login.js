import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import Form from "react-bootstrap/Form";
import { Button } from '@material-ui/core';
import "./login.css";
import { RepeatOneSharp } from "@material-ui/icons";

const loginUser = async (username) => {
    const url = `/api/getByUsername/${username.username}`
    const resp = await fetch(url)
    return resp.json();
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            retrievedPass: '',
            error: '',
            redirect: false,
        };

        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    async handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.username && !this.state.password) {
            return this.setState({ error: 'Username & Password are required' });
        }

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }
        const username = this.state.username;
        await loginUser({ username }).then(response => {
            if (response.password === undefined) {
                return this.setState({ error: 'Username does not exist' })
            }
            const retPass = response.password;
            this.setState({ ...this.state, retrievedPass: retPass })
            this.CheckPass()
        })
    }

    CheckPass() {
        if (this.state.retrievedPass === this.state.password) {
            console.log("success");
            this.setState({
                redirect: true,
            })
        }
        else {
            console.log("fail")
            console.log(this.state.retrievedPass)
            console.log(this.state.password)
            return this.setState({ error: "Invalid Password" })
        }
    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    }

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/menu" />
        }
        return (
            <div className="Login">
                <Form className="LoginForm" onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h4 onClick={this.dismissError}> {this.state.error}
                        </h4>
                    }
                    <div className="LoginHeader">
                        <div className="LoginHeaderTitle">
                            Welcome to MusicReview
                        </div>
                        <div className="LoginHeaderText">
                            Please enter your login information.
                        </div>
                        <div className="LoginSubHeader">
                            If you don't have an account, please click to Sign Up!
                        </div>
                    </div>
                    <div className="LoginFields">
                        <input
                            className="LoginInputs"
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleUserChange}
                        />
                        <input
                            className="LoginInputs"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handlePassChange}
                        />
                    </div>
                    <div className="LoginBtnShelf">
                        <Button variant="contained" color="secondary" type="submit">
                            Login
                            </Button>
                        <Link to="/sign-up" style={{ textDecoration: 'none' }}>
                            <Button className="LogInBtns" variant="contained" color="secondary">
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Login;