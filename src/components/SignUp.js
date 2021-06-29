import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'




export const SignUp = () => {

    const [user, setUser] = useState({})
    console.log(user)
    let history = useHistory()


    const handelChange = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
    }

    const submitUser = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://localhost:3001/users', user)
            .then(response =>console.log(response))
            history.push('/')
        } catch (error) {
        }
    }

    // axios.post('http://localhost:3001/users', user)


    return (
        <Form onSubmit={submitUser} style={{ width: '700px', marginLeft: '200px', marginTop: '50px' }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name"
                    name='firstName'
                    value={user.firstName}
                    onChange={handelChange}
                />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name"
                    name='lastName'
                    value={user.lastName}
                    onChange={handelChange}
                />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email"
                    name='email'
                    value={user.email}
                    onChange={handelChange}
                />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                    name='password'
                    value={user.password}
                    onChange={handelChange}

                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
  </Button>
        </Form>
    )
}
