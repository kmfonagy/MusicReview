import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom"
import Form from "react-bootstrap/Form";
import { Button } from '@material-ui/core';
import "./login.css";
import { RepeatOneSharp } from "@material-ui/icons";

const loginUser = async (username) => {
    const url = `http://localhost:8080/api/getByUsername/${username.username}`
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
                <Form onSubmit={this.hanldeSubmit}>
                    {
                        this.state.error &&
                        <h3 onClick={this.dismissError}> {this.state.error}
                        </h3>
                    }

                    <label>
                        Please enter your login information
                    </label>
                    <br />
                    <input
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleUserChange} />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePassChange} />
                    <br />
                </Form>
                <Button onClick={this.handleSubmit} variant="contained" color="secondary" >
                    Login
                </Button>
                <Link to="/signUp" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary">
                        Sign Up
                    </Button>
                </Link>
            </div>
        )
    }
}

export default Login;