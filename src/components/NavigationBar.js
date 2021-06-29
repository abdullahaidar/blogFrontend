import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';


export const NavigationBar = () => {
  return (
    <header className="header">
      {/* <Form>
        <p>
          Enter your Name
        </p>
        <input type="text" onChange={(event) => localStorage.setItem('user', event.target.value)} />

      </Form> */}
      <Link to='/'><div className="logo">Blog Project</div></Link>
      <nav>
        <ul>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/'>Posts</Link>
          </li>
          <li>
            <Link to='/new'>Add New Post</Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}
