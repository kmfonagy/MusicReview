import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "App.css";

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
}

function validateForm() {
    return userName.length > 0 && password.length > 0;
}

function handleSubmit(event) {
    event.preventDefault();
}

return (
    <div className="Login">
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="userName">
                <Form.Label>userName</Form.Label>
                <Form.Control
                    autoFocus
                    type="userName"
                    value={userName}
                    onChange={(u) => setUserName(u.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="password">
            <Form.Label>userName</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(p) => setPassword(p.target.value)}
                />
            </Form.Group>
            <Button type="submit" disabled={!validateForm()}>
                Login
            </Button>
        </Form>
    </div>
)