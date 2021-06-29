import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap'
import './AddPost.css'




const AddPost = ({ post: propsPost, addPost }) => {


    const [post, setPost] = useState({ ...propsPost });
    let history = useHistory()

    const handelForm = (event) => {
        event.preventDefault();
        if (post.title) {
            addPost(post);
            history.push('/')
        } else {
            alert('title required');
        }
    }

    return (
        <Container className="container">
            <Form onSubmit={handelForm}>
                <Form.Label className="label">Title</Form.Label>
                <Form.Control type="text" placeholder="Add a title" id="title"
                    value={post.title}
                    onChange={(event) => setPost({ ...post, title: event.target.value })} />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="label">Content</Form.Label>
                    <Form.Control as="textarea" rows={10} id="textarea"
                        value={post.content}
                        onChange={(event) => setPost({ ...post, content: event.target.value })} />
                </Form.Group>
                <Button type="submit" className='mt-3'>Submit</Button>
            </Form>
        </Container>
    )
}

export default AddPost;