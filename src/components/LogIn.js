import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const LogIn = () => {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const submitHandel = async (event) => {
        event.preventDefault();
        // setEmail(event.target.value); no need 
        // setPassword(event.target.value);
        // console.log(email);
        // console.log(password);
        try {
            const response = await axios.post('http://localhost:3001/users/login', { "email": email, "password": password })
            // .then(response => console.log(response.headers))
            // .then(response => localStorage.setItem('token', response.headers.get('auth')))
            // console.log(response.headers)
            localStorage.setItem('token', response.headers.auth)
        } catch (error) {
        }


    }
    return (
        <Form onSubmit={submitHandel} style={{ width: '700px', marginLeft: '200px', marginTop: '50px' }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} type="email" placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
          </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} type="password" placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
        </Button>
        </Form>
    )
}
