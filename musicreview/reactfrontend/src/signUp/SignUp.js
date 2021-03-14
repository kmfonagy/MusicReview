import React, { Component } from "react";
import { Link } from "react-router-dom"
import Form from "react-bootstrap/Form";
import { Button } from '@material-ui/core';
import "./SignUp.css";

class SignUp extends Component {
    render() {
        return (
            <div className="SignUp">
                <Form className="SignUpForm" onSubmit={this.handleSubmit}>
                    <div className="SignUpHeader">
                        <div className="SignUpHeaderTitle">
                            Create Your MusicReview Account
                        </div>
                        <div className="SignUpHeaderText">
                            Sign up to get started!
                        </div>
                        <div className="SignUpSubHeader">
                            Rate. Review. Enjoy.
                        </div>
                    </div>
                    <div className="SignUpFields">
                        <input
                            className="input"
                            type="text"
                            value="Username" 
                        />
                        <input
                            className="input"
                            type="text"
                            value="Email Address" 
                        />
                        <input
                            className="input"
                            type="text"
                            value="Password"
                        />
                    </div>
                    <div className="SignUpBtnShelf">
                        <Link to="/menu" style={{ textDecoration: 'none' }}>
                            <Button variant="contained" color="secondary">
                                Submit
                            </Button>
                        </Link>
                    </div>
                </Form>
            </div>
        )
    }
}

export default SignUp;