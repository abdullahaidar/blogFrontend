import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export const LogIn = () => {


    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let history = useHistory()



    const submitHandel = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://aboudehblog.herokuapp.com/users/login', { "email": email, "password": password });
            localStorage.setItem('token', response.headers.auth);
            history.push('/')
        } catch (error) {
        }


    }
    return (
        <>
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
            <Form style={{ width: '700px', marginLeft: '200px', marginTop: '50px' }}>
                <h5>you don't have an account? please</h5> <Button>Sign up</Button>
            </Form>
        </>
    )
}
