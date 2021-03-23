import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import Form from "react-bootstrap/Form";
import { Button } from '@material-ui/core';
import "./SignUp.css";

const signUpPost = async values => {
    const url = '/api/newUser'
    const resp = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: values.username,
            password: values.password,
            email: values.email,
        })
    })
    return resp.json();
}

const confirmUser = async (username) => {
    const url = `/api/getByUsername/${username.username}`
    const resp = await fetch(url)
    return resp.json();
};
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            error: '',
            redirect: false,
        };

        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    dismissError() {
        this.setState({ error: '' });
    }

    async handleSubmit(evt) {
        if (!this.state.username && !this.state.password && !this.state.email) {
            return this.setState({ error: 'Please enter something in' });
        }

        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        if (!this.state.email) {
            return this.setState({ error: 'Email is required' });
        }

        const username = this.state.username;
        let temp;
        await confirmUser({ username }).then(response => {
            evt.preventDefault();
            console.log(response);
            temp = response.name;
        }).catch(err => {
            console.log('failed', err);
        })

        if (temp !== undefined) {
            return this.setState({ error: 'Username already exist' })
        } else {
            console.log(this.state);
            evt.preventDefault();
            await signUpPost(this.state);
            this.setState({
                redirect: true,
            })
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

    handleEmailChange(evt) {
        this.setState({
            email: evt.target.value,
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/menu" />
        }

        return (
            <div className="SignUp">
                <Form className="SignUpForm" onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h4 onClick={this.dismissError}> {this.state.error} </h4>
                    }
                    
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
                            className="SignUpInputs"
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleUserChange} 
                        />
                        <input
                            className="SignUpInputs"
                            type="text"
                            placeholder="Email Address"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        />
                        <input
                            className="SignUpInputs"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handlePassChange}/>
                    </div>
                    <div className="SignUpBtnShelf">
                        <Button onClick={this.handleSubmit} variant="contained" color="secondary">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default SignUp;