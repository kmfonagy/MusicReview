import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Button } from '@material-ui/core';
import "./login.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleClick = () => {
        console.log('Logging in...');
    }

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={this.username}
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input
                            type="password"
                            value={this.password}
                            onChange={this.handleChange} />
                    </label>
                </Form>
                <Button onClick={this.handleClick}>
                    Login
                </Button>
            </div>
        )
    }
}

export default Login;