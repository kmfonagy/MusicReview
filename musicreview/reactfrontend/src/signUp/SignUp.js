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
                        Create Account, <br /> Sign up to get started!
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
                        value="Email Address" />
                    <br />
                    <input
                        className="input"
                        type="text"
                        value="Password"/>
                    <br />
                </Form>
                <Link to="/menu" style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary">
                        Submit
                    </Button>
                </Link>
            </div>
        )
    }
}

export default SignUp;