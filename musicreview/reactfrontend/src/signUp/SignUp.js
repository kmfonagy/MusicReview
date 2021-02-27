import React, { Component } from "react";
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form";
import { Button } from '@material-ui/core';
import "./SignUp.css";

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <Form onSubmit={this.handleSubmit}>
                    <label>
                        Please enter your login information
                    </label>
                    <br />
                    <input
                        className="input"
                        type="text"
                        value="Username" />
                    <br />
                    <input
                        className="input"
                        type="text"
                        value="Password"/>
                    <br />
                </Form>
                <Link to="/menu" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary">
                        Sign Up
                    </Button>
                </Link>
            </div>
        )
    }
}

export default SignUp;